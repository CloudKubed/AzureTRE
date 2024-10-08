export enum ApiEndpoint {
  Workspaces = 'workspaces',
  WorkspaceServices = 'workspace-services',
  UserResources = 'user-resources',
  SharedServices = 'shared-services',
  AirlockRequests = 'requests',
  AirlockLink = 'link',
  AirlockSubmit = 'submit',
  AirlockCancel = 'cancel',
  AirlockReview = 'review',
  AirlockDelete = 'delete',         //Added this for the delete button
  AirlockCreateReviewResource = 'review-user-resource',
  WorkspaceTemplates = 'workspace-templates',
  WorkspaceServiceTemplates = 'workspace-service-templates',
  UserResourceTemplates = 'user-resource-templates',
  SharedServiceTemplates = 'shared-service-templates',
  Operations = 'operations',
  History = 'history',
  InvokeAction = 'invoke-action',
  Costs = 'costs',
  Metadata = ".metadata",
  Health = "health",
  Users = 'users'
}
