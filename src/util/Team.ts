export default interface Team {
  createdAt?: string,
  description: string,
  iconSource: string,
  id: number,
  isFavourite: boolean,
  isArchived: boolean,
  name: string,
  numberOfCampaigns: number,
  numberOfLeads: number
}