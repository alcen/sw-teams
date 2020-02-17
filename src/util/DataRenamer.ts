interface Keys {
  action: any,
  activities: any[],
  avatar: any,
  createdAt: any,
  currentUser: any,
  description: any,
  iconSource: any,
  id: any,
  isArchived: any,
  isFavourite: any,
  name: any,
  notificationsCount: any,
  numberOfCampaigns: any,
  numberOfLeads: any,
  team: any,
  teams: any[],
  user: any,
}

const keysMap = {
  action: 'action',
  activities: 'activities',
  avatar: 'avatar',
  campaigns_count: 'numberOfCampaigns',
  created_at: 'createdAt',
  description: 'description',
  id: 'id',
  image: 'iconSource',
  is_archived: 'isArchived',
  is_favorited: 'isFavourite',
  leads_count: 'numberOfLeads',
  name: 'name',
  notifications_count: 'notificationsCount',
  person: 'user',
  target: 'team',
  teams: 'teams',
  current_user: 'currentUser'
};

const renameKeys = (rawData: any) => {
  const renamedObject = {} as Partial<Keys>;
  const oldKeys = Object.keys(rawData) as (keyof typeof keysMap)[];
  for (let i = 0; i < oldKeys.length; i++) {
    const currentKey = oldKeys[i];
    if (currentKey in rawData) {
      // need to rename this

      const newKey = keysMap[currentKey] as keyof Partial<Keys>;
      if (rawData[currentKey] instanceof Array) {
        // rename each item in the array
        const array = rawData[currentKey] as any[];
        const newArray = [] as any[];
        renamedObject[newKey] = newArray;
        
        for (let i = 0; i < array.length; i++) {
          newArray[i] = renameKeys(array[i]);
        }

      } else if (rawData[currentKey] instanceof Object) {
        // rename the item here
        renamedObject[newKey] = {} as Partial<Keys>;
        Object.assign(renamedObject[newKey], renameKeys(rawData[currentKey]));

      } else {
        renamedObject[newKey] = rawData[currentKey];
      }
    }
  }
  return renamedObject;
}

export default renameKeys;