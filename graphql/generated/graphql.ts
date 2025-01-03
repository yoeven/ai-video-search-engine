import { gql } from "@apollo/client";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  float8: { input: any; output: any };
  jsonb: { input: any; output: any };
  numeric: { input: any; output: any };
  smallint: { input: any; output: any };
  timestamptz: { input: any; output: any };
  uuid: { input: any; output: any };
  vector: { input: any; output: any };
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars["Boolean"]["input"]>;
  _gt?: InputMaybe<Scalars["Boolean"]["input"]>;
  _gte?: InputMaybe<Scalars["Boolean"]["input"]>;
  _in?: InputMaybe<Array<Scalars["Boolean"]["input"]>>;
  _is_null?: InputMaybe<Scalars["Boolean"]["input"]>;
  _lt?: InputMaybe<Scalars["Boolean"]["input"]>;
  _lte?: InputMaybe<Scalars["Boolean"]["input"]>;
  _neq?: InputMaybe<Scalars["Boolean"]["input"]>;
  _nin?: InputMaybe<Array<Scalars["Boolean"]["input"]>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars["Int"]["input"]>;
  _gt?: InputMaybe<Scalars["Int"]["input"]>;
  _gte?: InputMaybe<Scalars["Int"]["input"]>;
  _in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  _is_null?: InputMaybe<Scalars["Boolean"]["input"]>;
  _lt?: InputMaybe<Scalars["Int"]["input"]>;
  _lte?: InputMaybe<Scalars["Int"]["input"]>;
  _neq?: InputMaybe<Scalars["Int"]["input"]>;
  _nin?: InputMaybe<Array<Scalars["Int"]["input"]>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars["String"]["input"]>;
  _gt?: InputMaybe<Scalars["String"]["input"]>;
  _gte?: InputMaybe<Scalars["String"]["input"]>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars["String"]["input"]>;
  _in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars["String"]["input"]>;
  _is_null?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars["String"]["input"]>;
  _lt?: InputMaybe<Scalars["String"]["input"]>;
  _lte?: InputMaybe<Scalars["String"]["input"]>;
  _neq?: InputMaybe<Scalars["String"]["input"]>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars["String"]["input"]>;
  _nin?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars["String"]["input"]>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars["String"]["input"]>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars["String"]["input"]>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars["String"]["input"]>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars["String"]["input"]>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars["String"]["input"]>;
};

/** Auth: Stores user login data within a secure schema. */
export type Auth_Users = {
  __typename?: "auth_users";
  aud?: Maybe<Scalars["String"]["output"]>;
  banned_until?: Maybe<Scalars["timestamptz"]["output"]>;
  confirmation_sent_at?: Maybe<Scalars["timestamptz"]["output"]>;
  confirmation_token?: Maybe<Scalars["String"]["output"]>;
  confirmed_at?: Maybe<Scalars["timestamptz"]["output"]>;
  created_at?: Maybe<Scalars["timestamptz"]["output"]>;
  deleted_at?: Maybe<Scalars["timestamptz"]["output"]>;
  email?: Maybe<Scalars["String"]["output"]>;
  email_change?: Maybe<Scalars["String"]["output"]>;
  email_change_confirm_status?: Maybe<Scalars["smallint"]["output"]>;
  email_change_sent_at?: Maybe<Scalars["timestamptz"]["output"]>;
  email_change_token_current?: Maybe<Scalars["String"]["output"]>;
  email_change_token_new?: Maybe<Scalars["String"]["output"]>;
  email_confirmed_at?: Maybe<Scalars["timestamptz"]["output"]>;
  encrypted_password?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["uuid"]["output"];
  instance_id?: Maybe<Scalars["uuid"]["output"]>;
  invited_at?: Maybe<Scalars["timestamptz"]["output"]>;
  is_anonymous: Scalars["Boolean"]["output"];
  /** Auth: Set this column to true when the account comes from SSO. These accounts can have duplicate emails. */
  is_sso_user: Scalars["Boolean"]["output"];
  is_super_admin?: Maybe<Scalars["Boolean"]["output"]>;
  last_sign_in_at?: Maybe<Scalars["timestamptz"]["output"]>;
  phone?: Maybe<Scalars["String"]["output"]>;
  phone_change?: Maybe<Scalars["String"]["output"]>;
  phone_change_sent_at?: Maybe<Scalars["timestamptz"]["output"]>;
  phone_change_token?: Maybe<Scalars["String"]["output"]>;
  phone_confirmed_at?: Maybe<Scalars["timestamptz"]["output"]>;
  raw_app_meta_data?: Maybe<Scalars["jsonb"]["output"]>;
  raw_user_meta_data?: Maybe<Scalars["jsonb"]["output"]>;
  reauthentication_sent_at?: Maybe<Scalars["timestamptz"]["output"]>;
  reauthentication_token?: Maybe<Scalars["String"]["output"]>;
  recovery_sent_at?: Maybe<Scalars["timestamptz"]["output"]>;
  recovery_token?: Maybe<Scalars["String"]["output"]>;
  role?: Maybe<Scalars["String"]["output"]>;
  updated_at?: Maybe<Scalars["timestamptz"]["output"]>;
};

/** Auth: Stores user login data within a secure schema. */
export type Auth_UsersRaw_App_Meta_DataArgs = {
  path?: InputMaybe<Scalars["String"]["input"]>;
};

/** Auth: Stores user login data within a secure schema. */
export type Auth_UsersRaw_User_Meta_DataArgs = {
  path?: InputMaybe<Scalars["String"]["input"]>;
};

/** aggregated selection of "auth.users" */
export type Auth_Users_Aggregate = {
  __typename?: "auth_users_aggregate";
  aggregate?: Maybe<Auth_Users_Aggregate_Fields>;
  nodes: Array<Auth_Users>;
};

/** aggregate fields of "auth.users" */
export type Auth_Users_Aggregate_Fields = {
  __typename?: "auth_users_aggregate_fields";
  avg?: Maybe<Auth_Users_Avg_Fields>;
  count: Scalars["Int"]["output"];
  max?: Maybe<Auth_Users_Max_Fields>;
  min?: Maybe<Auth_Users_Min_Fields>;
  stddev?: Maybe<Auth_Users_Stddev_Fields>;
  stddev_pop?: Maybe<Auth_Users_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Auth_Users_Stddev_Samp_Fields>;
  sum?: Maybe<Auth_Users_Sum_Fields>;
  var_pop?: Maybe<Auth_Users_Var_Pop_Fields>;
  var_samp?: Maybe<Auth_Users_Var_Samp_Fields>;
  variance?: Maybe<Auth_Users_Variance_Fields>;
};

/** aggregate fields of "auth.users" */
export type Auth_Users_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Auth_Users_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Auth_Users_Append_Input = {
  raw_app_meta_data?: InputMaybe<Scalars["jsonb"]["input"]>;
  raw_user_meta_data?: InputMaybe<Scalars["jsonb"]["input"]>;
};

/** aggregate avg on columns */
export type Auth_Users_Avg_Fields = {
  __typename?: "auth_users_avg_fields";
  email_change_confirm_status?: Maybe<Scalars["Float"]["output"]>;
};

/** Boolean expression to filter rows from the table "auth.users". All fields are combined with a logical 'AND'. */
export type Auth_Users_Bool_Exp = {
  _and?: InputMaybe<Array<Auth_Users_Bool_Exp>>;
  _not?: InputMaybe<Auth_Users_Bool_Exp>;
  _or?: InputMaybe<Array<Auth_Users_Bool_Exp>>;
  aud?: InputMaybe<String_Comparison_Exp>;
  banned_until?: InputMaybe<Timestamptz_Comparison_Exp>;
  confirmation_sent_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  confirmation_token?: InputMaybe<String_Comparison_Exp>;
  confirmed_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  deleted_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  email_change?: InputMaybe<String_Comparison_Exp>;
  email_change_confirm_status?: InputMaybe<Smallint_Comparison_Exp>;
  email_change_sent_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  email_change_token_current?: InputMaybe<String_Comparison_Exp>;
  email_change_token_new?: InputMaybe<String_Comparison_Exp>;
  email_confirmed_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  encrypted_password?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  instance_id?: InputMaybe<Uuid_Comparison_Exp>;
  invited_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  is_anonymous?: InputMaybe<Boolean_Comparison_Exp>;
  is_sso_user?: InputMaybe<Boolean_Comparison_Exp>;
  is_super_admin?: InputMaybe<Boolean_Comparison_Exp>;
  last_sign_in_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  phone?: InputMaybe<String_Comparison_Exp>;
  phone_change?: InputMaybe<String_Comparison_Exp>;
  phone_change_sent_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  phone_change_token?: InputMaybe<String_Comparison_Exp>;
  phone_confirmed_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  raw_app_meta_data?: InputMaybe<Jsonb_Comparison_Exp>;
  raw_user_meta_data?: InputMaybe<Jsonb_Comparison_Exp>;
  reauthentication_sent_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  reauthentication_token?: InputMaybe<String_Comparison_Exp>;
  recovery_sent_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  recovery_token?: InputMaybe<String_Comparison_Exp>;
  role?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.users" */
export enum Auth_Users_Constraint {
  /** unique or primary key constraint on columns "confirmation_token" */
  ConfirmationTokenIdx = "confirmation_token_idx",
  /** unique or primary key constraint on columns "email_change_token_current" */
  EmailChangeTokenCurrentIdx = "email_change_token_current_idx",
  /** unique or primary key constraint on columns "email_change_token_new" */
  EmailChangeTokenNewIdx = "email_change_token_new_idx",
  /** unique or primary key constraint on columns "reauthentication_token" */
  ReauthenticationTokenIdx = "reauthentication_token_idx",
  /** unique or primary key constraint on columns "recovery_token" */
  RecoveryTokenIdx = "recovery_token_idx",
  /** unique or primary key constraint on columns "email" */
  UsersEmailPartialKey = "users_email_partial_key",
  /** unique or primary key constraint on columns "phone" */
  UsersPhoneKey = "users_phone_key",
  /** unique or primary key constraint on columns "id" */
  UsersPkey = "users_pkey",
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Auth_Users_Delete_At_Path_Input = {
  raw_app_meta_data?: InputMaybe<Array<Scalars["String"]["input"]>>;
  raw_user_meta_data?: InputMaybe<Array<Scalars["String"]["input"]>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Auth_Users_Delete_Elem_Input = {
  raw_app_meta_data?: InputMaybe<Scalars["Int"]["input"]>;
  raw_user_meta_data?: InputMaybe<Scalars["Int"]["input"]>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Auth_Users_Delete_Key_Input = {
  raw_app_meta_data?: InputMaybe<Scalars["String"]["input"]>;
  raw_user_meta_data?: InputMaybe<Scalars["String"]["input"]>;
};

/** input type for incrementing numeric columns in table "auth.users" */
export type Auth_Users_Inc_Input = {
  email_change_confirm_status?: InputMaybe<Scalars["smallint"]["input"]>;
};

/** input type for inserting data into table "auth.users" */
export type Auth_Users_Insert_Input = {
  aud?: InputMaybe<Scalars["String"]["input"]>;
  banned_until?: InputMaybe<Scalars["timestamptz"]["input"]>;
  confirmation_sent_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  confirmation_token?: InputMaybe<Scalars["String"]["input"]>;
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  deleted_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  email_change?: InputMaybe<Scalars["String"]["input"]>;
  email_change_confirm_status?: InputMaybe<Scalars["smallint"]["input"]>;
  email_change_sent_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  email_change_token_current?: InputMaybe<Scalars["String"]["input"]>;
  email_change_token_new?: InputMaybe<Scalars["String"]["input"]>;
  email_confirmed_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  encrypted_password?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  instance_id?: InputMaybe<Scalars["uuid"]["input"]>;
  invited_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  is_anonymous?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Auth: Set this column to true when the account comes from SSO. These accounts can have duplicate emails. */
  is_sso_user?: InputMaybe<Scalars["Boolean"]["input"]>;
  is_super_admin?: InputMaybe<Scalars["Boolean"]["input"]>;
  last_sign_in_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  phone?: InputMaybe<Scalars["String"]["input"]>;
  phone_change?: InputMaybe<Scalars["String"]["input"]>;
  phone_change_sent_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  phone_change_token?: InputMaybe<Scalars["String"]["input"]>;
  phone_confirmed_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  raw_app_meta_data?: InputMaybe<Scalars["jsonb"]["input"]>;
  raw_user_meta_data?: InputMaybe<Scalars["jsonb"]["input"]>;
  reauthentication_sent_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  reauthentication_token?: InputMaybe<Scalars["String"]["input"]>;
  recovery_sent_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  recovery_token?: InputMaybe<Scalars["String"]["input"]>;
  role?: InputMaybe<Scalars["String"]["input"]>;
  updated_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
};

/** aggregate max on columns */
export type Auth_Users_Max_Fields = {
  __typename?: "auth_users_max_fields";
  aud?: Maybe<Scalars["String"]["output"]>;
  banned_until?: Maybe<Scalars["timestamptz"]["output"]>;
  confirmation_sent_at?: Maybe<Scalars["timestamptz"]["output"]>;
  confirmation_token?: Maybe<Scalars["String"]["output"]>;
  confirmed_at?: Maybe<Scalars["timestamptz"]["output"]>;
  created_at?: Maybe<Scalars["timestamptz"]["output"]>;
  deleted_at?: Maybe<Scalars["timestamptz"]["output"]>;
  email?: Maybe<Scalars["String"]["output"]>;
  email_change?: Maybe<Scalars["String"]["output"]>;
  email_change_confirm_status?: Maybe<Scalars["smallint"]["output"]>;
  email_change_sent_at?: Maybe<Scalars["timestamptz"]["output"]>;
  email_change_token_current?: Maybe<Scalars["String"]["output"]>;
  email_change_token_new?: Maybe<Scalars["String"]["output"]>;
  email_confirmed_at?: Maybe<Scalars["timestamptz"]["output"]>;
  encrypted_password?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["uuid"]["output"]>;
  instance_id?: Maybe<Scalars["uuid"]["output"]>;
  invited_at?: Maybe<Scalars["timestamptz"]["output"]>;
  last_sign_in_at?: Maybe<Scalars["timestamptz"]["output"]>;
  phone?: Maybe<Scalars["String"]["output"]>;
  phone_change?: Maybe<Scalars["String"]["output"]>;
  phone_change_sent_at?: Maybe<Scalars["timestamptz"]["output"]>;
  phone_change_token?: Maybe<Scalars["String"]["output"]>;
  phone_confirmed_at?: Maybe<Scalars["timestamptz"]["output"]>;
  reauthentication_sent_at?: Maybe<Scalars["timestamptz"]["output"]>;
  reauthentication_token?: Maybe<Scalars["String"]["output"]>;
  recovery_sent_at?: Maybe<Scalars["timestamptz"]["output"]>;
  recovery_token?: Maybe<Scalars["String"]["output"]>;
  role?: Maybe<Scalars["String"]["output"]>;
  updated_at?: Maybe<Scalars["timestamptz"]["output"]>;
};

/** aggregate min on columns */
export type Auth_Users_Min_Fields = {
  __typename?: "auth_users_min_fields";
  aud?: Maybe<Scalars["String"]["output"]>;
  banned_until?: Maybe<Scalars["timestamptz"]["output"]>;
  confirmation_sent_at?: Maybe<Scalars["timestamptz"]["output"]>;
  confirmation_token?: Maybe<Scalars["String"]["output"]>;
  confirmed_at?: Maybe<Scalars["timestamptz"]["output"]>;
  created_at?: Maybe<Scalars["timestamptz"]["output"]>;
  deleted_at?: Maybe<Scalars["timestamptz"]["output"]>;
  email?: Maybe<Scalars["String"]["output"]>;
  email_change?: Maybe<Scalars["String"]["output"]>;
  email_change_confirm_status?: Maybe<Scalars["smallint"]["output"]>;
  email_change_sent_at?: Maybe<Scalars["timestamptz"]["output"]>;
  email_change_token_current?: Maybe<Scalars["String"]["output"]>;
  email_change_token_new?: Maybe<Scalars["String"]["output"]>;
  email_confirmed_at?: Maybe<Scalars["timestamptz"]["output"]>;
  encrypted_password?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["uuid"]["output"]>;
  instance_id?: Maybe<Scalars["uuid"]["output"]>;
  invited_at?: Maybe<Scalars["timestamptz"]["output"]>;
  last_sign_in_at?: Maybe<Scalars["timestamptz"]["output"]>;
  phone?: Maybe<Scalars["String"]["output"]>;
  phone_change?: Maybe<Scalars["String"]["output"]>;
  phone_change_sent_at?: Maybe<Scalars["timestamptz"]["output"]>;
  phone_change_token?: Maybe<Scalars["String"]["output"]>;
  phone_confirmed_at?: Maybe<Scalars["timestamptz"]["output"]>;
  reauthentication_sent_at?: Maybe<Scalars["timestamptz"]["output"]>;
  reauthentication_token?: Maybe<Scalars["String"]["output"]>;
  recovery_sent_at?: Maybe<Scalars["timestamptz"]["output"]>;
  recovery_token?: Maybe<Scalars["String"]["output"]>;
  role?: Maybe<Scalars["String"]["output"]>;
  updated_at?: Maybe<Scalars["timestamptz"]["output"]>;
};

/** response of any mutation on the table "auth.users" */
export type Auth_Users_Mutation_Response = {
  __typename?: "auth_users_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<Auth_Users>;
};

/** on_conflict condition type for table "auth.users" */
export type Auth_Users_On_Conflict = {
  constraint: Auth_Users_Constraint;
  update_columns?: Array<Auth_Users_Update_Column>;
  where?: InputMaybe<Auth_Users_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.users". */
export type Auth_Users_Order_By = {
  aud?: InputMaybe<Order_By>;
  banned_until?: InputMaybe<Order_By>;
  confirmation_sent_at?: InputMaybe<Order_By>;
  confirmation_token?: InputMaybe<Order_By>;
  confirmed_at?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  email_change?: InputMaybe<Order_By>;
  email_change_confirm_status?: InputMaybe<Order_By>;
  email_change_sent_at?: InputMaybe<Order_By>;
  email_change_token_current?: InputMaybe<Order_By>;
  email_change_token_new?: InputMaybe<Order_By>;
  email_confirmed_at?: InputMaybe<Order_By>;
  encrypted_password?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  instance_id?: InputMaybe<Order_By>;
  invited_at?: InputMaybe<Order_By>;
  is_anonymous?: InputMaybe<Order_By>;
  is_sso_user?: InputMaybe<Order_By>;
  is_super_admin?: InputMaybe<Order_By>;
  last_sign_in_at?: InputMaybe<Order_By>;
  phone?: InputMaybe<Order_By>;
  phone_change?: InputMaybe<Order_By>;
  phone_change_sent_at?: InputMaybe<Order_By>;
  phone_change_token?: InputMaybe<Order_By>;
  phone_confirmed_at?: InputMaybe<Order_By>;
  raw_app_meta_data?: InputMaybe<Order_By>;
  raw_user_meta_data?: InputMaybe<Order_By>;
  reauthentication_sent_at?: InputMaybe<Order_By>;
  reauthentication_token?: InputMaybe<Order_By>;
  recovery_sent_at?: InputMaybe<Order_By>;
  recovery_token?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: auth.users */
export type Auth_Users_Pk_Columns_Input = {
  id: Scalars["uuid"]["input"];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Auth_Users_Prepend_Input = {
  raw_app_meta_data?: InputMaybe<Scalars["jsonb"]["input"]>;
  raw_user_meta_data?: InputMaybe<Scalars["jsonb"]["input"]>;
};

/** select columns of table "auth.users" */
export enum Auth_Users_Select_Column {
  /** column name */
  Aud = "aud",
  /** column name */
  BannedUntil = "banned_until",
  /** column name */
  ConfirmationSentAt = "confirmation_sent_at",
  /** column name */
  ConfirmationToken = "confirmation_token",
  /** column name */
  ConfirmedAt = "confirmed_at",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  DeletedAt = "deleted_at",
  /** column name */
  Email = "email",
  /** column name */
  EmailChange = "email_change",
  /** column name */
  EmailChangeConfirmStatus = "email_change_confirm_status",
  /** column name */
  EmailChangeSentAt = "email_change_sent_at",
  /** column name */
  EmailChangeTokenCurrent = "email_change_token_current",
  /** column name */
  EmailChangeTokenNew = "email_change_token_new",
  /** column name */
  EmailConfirmedAt = "email_confirmed_at",
  /** column name */
  EncryptedPassword = "encrypted_password",
  /** column name */
  Id = "id",
  /** column name */
  InstanceId = "instance_id",
  /** column name */
  InvitedAt = "invited_at",
  /** column name */
  IsAnonymous = "is_anonymous",
  /** column name */
  IsSsoUser = "is_sso_user",
  /** column name */
  IsSuperAdmin = "is_super_admin",
  /** column name */
  LastSignInAt = "last_sign_in_at",
  /** column name */
  Phone = "phone",
  /** column name */
  PhoneChange = "phone_change",
  /** column name */
  PhoneChangeSentAt = "phone_change_sent_at",
  /** column name */
  PhoneChangeToken = "phone_change_token",
  /** column name */
  PhoneConfirmedAt = "phone_confirmed_at",
  /** column name */
  RawAppMetaData = "raw_app_meta_data",
  /** column name */
  RawUserMetaData = "raw_user_meta_data",
  /** column name */
  ReauthenticationSentAt = "reauthentication_sent_at",
  /** column name */
  ReauthenticationToken = "reauthentication_token",
  /** column name */
  RecoverySentAt = "recovery_sent_at",
  /** column name */
  RecoveryToken = "recovery_token",
  /** column name */
  Role = "role",
  /** column name */
  UpdatedAt = "updated_at",
}

/** input type for updating data in table "auth.users" */
export type Auth_Users_Set_Input = {
  aud?: InputMaybe<Scalars["String"]["input"]>;
  banned_until?: InputMaybe<Scalars["timestamptz"]["input"]>;
  confirmation_sent_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  confirmation_token?: InputMaybe<Scalars["String"]["input"]>;
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  deleted_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  email_change?: InputMaybe<Scalars["String"]["input"]>;
  email_change_confirm_status?: InputMaybe<Scalars["smallint"]["input"]>;
  email_change_sent_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  email_change_token_current?: InputMaybe<Scalars["String"]["input"]>;
  email_change_token_new?: InputMaybe<Scalars["String"]["input"]>;
  email_confirmed_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  encrypted_password?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  instance_id?: InputMaybe<Scalars["uuid"]["input"]>;
  invited_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  is_anonymous?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Auth: Set this column to true when the account comes from SSO. These accounts can have duplicate emails. */
  is_sso_user?: InputMaybe<Scalars["Boolean"]["input"]>;
  is_super_admin?: InputMaybe<Scalars["Boolean"]["input"]>;
  last_sign_in_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  phone?: InputMaybe<Scalars["String"]["input"]>;
  phone_change?: InputMaybe<Scalars["String"]["input"]>;
  phone_change_sent_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  phone_change_token?: InputMaybe<Scalars["String"]["input"]>;
  phone_confirmed_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  raw_app_meta_data?: InputMaybe<Scalars["jsonb"]["input"]>;
  raw_user_meta_data?: InputMaybe<Scalars["jsonb"]["input"]>;
  reauthentication_sent_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  reauthentication_token?: InputMaybe<Scalars["String"]["input"]>;
  recovery_sent_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  recovery_token?: InputMaybe<Scalars["String"]["input"]>;
  role?: InputMaybe<Scalars["String"]["input"]>;
  updated_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
};

/** aggregate stddev on columns */
export type Auth_Users_Stddev_Fields = {
  __typename?: "auth_users_stddev_fields";
  email_change_confirm_status?: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate stddev_pop on columns */
export type Auth_Users_Stddev_Pop_Fields = {
  __typename?: "auth_users_stddev_pop_fields";
  email_change_confirm_status?: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate stddev_samp on columns */
export type Auth_Users_Stddev_Samp_Fields = {
  __typename?: "auth_users_stddev_samp_fields";
  email_change_confirm_status?: Maybe<Scalars["Float"]["output"]>;
};

/** Streaming cursor of the table "auth_users" */
export type Auth_Users_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Auth_Users_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Auth_Users_Stream_Cursor_Value_Input = {
  aud?: InputMaybe<Scalars["String"]["input"]>;
  banned_until?: InputMaybe<Scalars["timestamptz"]["input"]>;
  confirmation_sent_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  confirmation_token?: InputMaybe<Scalars["String"]["input"]>;
  confirmed_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  deleted_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  email_change?: InputMaybe<Scalars["String"]["input"]>;
  email_change_confirm_status?: InputMaybe<Scalars["smallint"]["input"]>;
  email_change_sent_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  email_change_token_current?: InputMaybe<Scalars["String"]["input"]>;
  email_change_token_new?: InputMaybe<Scalars["String"]["input"]>;
  email_confirmed_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  encrypted_password?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  instance_id?: InputMaybe<Scalars["uuid"]["input"]>;
  invited_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  is_anonymous?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Auth: Set this column to true when the account comes from SSO. These accounts can have duplicate emails. */
  is_sso_user?: InputMaybe<Scalars["Boolean"]["input"]>;
  is_super_admin?: InputMaybe<Scalars["Boolean"]["input"]>;
  last_sign_in_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  phone?: InputMaybe<Scalars["String"]["input"]>;
  phone_change?: InputMaybe<Scalars["String"]["input"]>;
  phone_change_sent_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  phone_change_token?: InputMaybe<Scalars["String"]["input"]>;
  phone_confirmed_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  raw_app_meta_data?: InputMaybe<Scalars["jsonb"]["input"]>;
  raw_user_meta_data?: InputMaybe<Scalars["jsonb"]["input"]>;
  reauthentication_sent_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  reauthentication_token?: InputMaybe<Scalars["String"]["input"]>;
  recovery_sent_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  recovery_token?: InputMaybe<Scalars["String"]["input"]>;
  role?: InputMaybe<Scalars["String"]["input"]>;
  updated_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
};

/** aggregate sum on columns */
export type Auth_Users_Sum_Fields = {
  __typename?: "auth_users_sum_fields";
  email_change_confirm_status?: Maybe<Scalars["smallint"]["output"]>;
};

/** update columns of table "auth.users" */
export enum Auth_Users_Update_Column {
  /** column name */
  Aud = "aud",
  /** column name */
  BannedUntil = "banned_until",
  /** column name */
  ConfirmationSentAt = "confirmation_sent_at",
  /** column name */
  ConfirmationToken = "confirmation_token",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  DeletedAt = "deleted_at",
  /** column name */
  Email = "email",
  /** column name */
  EmailChange = "email_change",
  /** column name */
  EmailChangeConfirmStatus = "email_change_confirm_status",
  /** column name */
  EmailChangeSentAt = "email_change_sent_at",
  /** column name */
  EmailChangeTokenCurrent = "email_change_token_current",
  /** column name */
  EmailChangeTokenNew = "email_change_token_new",
  /** column name */
  EmailConfirmedAt = "email_confirmed_at",
  /** column name */
  EncryptedPassword = "encrypted_password",
  /** column name */
  Id = "id",
  /** column name */
  InstanceId = "instance_id",
  /** column name */
  InvitedAt = "invited_at",
  /** column name */
  IsAnonymous = "is_anonymous",
  /** column name */
  IsSsoUser = "is_sso_user",
  /** column name */
  IsSuperAdmin = "is_super_admin",
  /** column name */
  LastSignInAt = "last_sign_in_at",
  /** column name */
  Phone = "phone",
  /** column name */
  PhoneChange = "phone_change",
  /** column name */
  PhoneChangeSentAt = "phone_change_sent_at",
  /** column name */
  PhoneChangeToken = "phone_change_token",
  /** column name */
  PhoneConfirmedAt = "phone_confirmed_at",
  /** column name */
  RawAppMetaData = "raw_app_meta_data",
  /** column name */
  RawUserMetaData = "raw_user_meta_data",
  /** column name */
  ReauthenticationSentAt = "reauthentication_sent_at",
  /** column name */
  ReauthenticationToken = "reauthentication_token",
  /** column name */
  RecoverySentAt = "recovery_sent_at",
  /** column name */
  RecoveryToken = "recovery_token",
  /** column name */
  Role = "role",
  /** column name */
  UpdatedAt = "updated_at",
}

export type Auth_Users_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Auth_Users_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Auth_Users_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Auth_Users_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Auth_Users_Delete_Key_Input>;
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Auth_Users_Inc_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Auth_Users_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Auth_Users_Set_Input>;
  /** filter the rows which have to be updated */
  where: Auth_Users_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Auth_Users_Var_Pop_Fields = {
  __typename?: "auth_users_var_pop_fields";
  email_change_confirm_status?: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate var_samp on columns */
export type Auth_Users_Var_Samp_Fields = {
  __typename?: "auth_users_var_samp_fields";
  email_change_confirm_status?: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate variance on columns */
export type Auth_Users_Variance_Fields = {
  __typename?: "auth_users_variance_fields";
  email_change_confirm_status?: Maybe<Scalars["Float"]["output"]>;
};

/** columns and relationships of "chats" */
export type Chats = {
  __typename?: "chats";
  active: Scalars["Boolean"]["output"];
  created_at: Scalars["timestamptz"]["output"];
  id: Scalars["uuid"]["output"];
  index_id: Scalars["uuid"]["output"];
  jigsawstack_chat_session_id: Scalars["uuid"]["output"];
  updated_at: Scalars["timestamptz"]["output"];
  user_id: Scalars["uuid"]["output"];
};

/** aggregated selection of "chats" */
export type Chats_Aggregate = {
  __typename?: "chats_aggregate";
  aggregate?: Maybe<Chats_Aggregate_Fields>;
  nodes: Array<Chats>;
};

/** aggregate fields of "chats" */
export type Chats_Aggregate_Fields = {
  __typename?: "chats_aggregate_fields";
  count: Scalars["Int"]["output"];
  max?: Maybe<Chats_Max_Fields>;
  min?: Maybe<Chats_Min_Fields>;
};

/** aggregate fields of "chats" */
export type Chats_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Chats_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** Boolean expression to filter rows from the table "chats". All fields are combined with a logical 'AND'. */
export type Chats_Bool_Exp = {
  _and?: InputMaybe<Array<Chats_Bool_Exp>>;
  _not?: InputMaybe<Chats_Bool_Exp>;
  _or?: InputMaybe<Array<Chats_Bool_Exp>>;
  active?: InputMaybe<Boolean_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  index_id?: InputMaybe<Uuid_Comparison_Exp>;
  jigsawstack_chat_session_id?: InputMaybe<Uuid_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "chats" */
export enum Chats_Constraint {
  /** unique or primary key constraint on columns "id" */
  ChatsPkey = "chats_pkey",
}

/** input type for inserting data into table "chats" */
export type Chats_Insert_Input = {
  active?: InputMaybe<Scalars["Boolean"]["input"]>;
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  index_id?: InputMaybe<Scalars["uuid"]["input"]>;
  jigsawstack_chat_session_id?: InputMaybe<Scalars["uuid"]["input"]>;
  updated_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  user_id?: InputMaybe<Scalars["uuid"]["input"]>;
};

/** aggregate max on columns */
export type Chats_Max_Fields = {
  __typename?: "chats_max_fields";
  created_at?: Maybe<Scalars["timestamptz"]["output"]>;
  id?: Maybe<Scalars["uuid"]["output"]>;
  index_id?: Maybe<Scalars["uuid"]["output"]>;
  jigsawstack_chat_session_id?: Maybe<Scalars["uuid"]["output"]>;
  updated_at?: Maybe<Scalars["timestamptz"]["output"]>;
  user_id?: Maybe<Scalars["uuid"]["output"]>;
};

/** aggregate min on columns */
export type Chats_Min_Fields = {
  __typename?: "chats_min_fields";
  created_at?: Maybe<Scalars["timestamptz"]["output"]>;
  id?: Maybe<Scalars["uuid"]["output"]>;
  index_id?: Maybe<Scalars["uuid"]["output"]>;
  jigsawstack_chat_session_id?: Maybe<Scalars["uuid"]["output"]>;
  updated_at?: Maybe<Scalars["timestamptz"]["output"]>;
  user_id?: Maybe<Scalars["uuid"]["output"]>;
};

/** response of any mutation on the table "chats" */
export type Chats_Mutation_Response = {
  __typename?: "chats_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<Chats>;
};

/** on_conflict condition type for table "chats" */
export type Chats_On_Conflict = {
  constraint: Chats_Constraint;
  update_columns?: Array<Chats_Update_Column>;
  where?: InputMaybe<Chats_Bool_Exp>;
};

/** Ordering options when selecting data from "chats". */
export type Chats_Order_By = {
  active?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  index_id?: InputMaybe<Order_By>;
  jigsawstack_chat_session_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: chats */
export type Chats_Pk_Columns_Input = {
  id: Scalars["uuid"]["input"];
};

/** select columns of table "chats" */
export enum Chats_Select_Column {
  /** column name */
  Active = "active",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Id = "id",
  /** column name */
  IndexId = "index_id",
  /** column name */
  JigsawstackChatSessionId = "jigsawstack_chat_session_id",
  /** column name */
  UpdatedAt = "updated_at",
  /** column name */
  UserId = "user_id",
}

/** input type for updating data in table "chats" */
export type Chats_Set_Input = {
  active?: InputMaybe<Scalars["Boolean"]["input"]>;
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  index_id?: InputMaybe<Scalars["uuid"]["input"]>;
  jigsawstack_chat_session_id?: InputMaybe<Scalars["uuid"]["input"]>;
  updated_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  user_id?: InputMaybe<Scalars["uuid"]["input"]>;
};

/** Streaming cursor of the table "chats" */
export type Chats_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Chats_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Chats_Stream_Cursor_Value_Input = {
  active?: InputMaybe<Scalars["Boolean"]["input"]>;
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  index_id?: InputMaybe<Scalars["uuid"]["input"]>;
  jigsawstack_chat_session_id?: InputMaybe<Scalars["uuid"]["input"]>;
  updated_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  user_id?: InputMaybe<Scalars["uuid"]["input"]>;
};

/** update columns of table "chats" */
export enum Chats_Update_Column {
  /** column name */
  Active = "active",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Id = "id",
  /** column name */
  IndexId = "index_id",
  /** column name */
  JigsawstackChatSessionId = "jigsawstack_chat_session_id",
  /** column name */
  UpdatedAt = "updated_at",
  /** column name */
  UserId = "user_id",
}

export type Chats_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Chats_Set_Input>;
  /** filter the rows which have to be updated */
  where: Chats_Bool_Exp;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = "ASC",
  /** descending ordering of the cursor */
  Desc = "DESC",
}

/** columns and relationships of "index_embeddings" */
export type Index_Embeddings = {
  __typename?: "index_embeddings";
  content: Scalars["String"]["output"];
  created_at: Scalars["timestamptz"]["output"];
  duration_time?: Maybe<Scalars["numeric"]["output"]>;
  embedding: Scalars["vector"]["output"];
  end_time?: Maybe<Scalars["numeric"]["output"]>;
  id: Scalars["uuid"]["output"];
  /** An object relationship */
  index: Indexes;
  index_id: Scalars["uuid"]["output"];
  similarity?: Maybe<Scalars["numeric"]["output"]>;
  start_time?: Maybe<Scalars["numeric"]["output"]>;
  updated_at: Scalars["timestamptz"]["output"];
};

/** aggregated selection of "index_embeddings" */
export type Index_Embeddings_Aggregate = {
  __typename?: "index_embeddings_aggregate";
  aggregate?: Maybe<Index_Embeddings_Aggregate_Fields>;
  nodes: Array<Index_Embeddings>;
};

export type Index_Embeddings_Aggregate_Bool_Exp = {
  count?: InputMaybe<Index_Embeddings_Aggregate_Bool_Exp_Count>;
};

export type Index_Embeddings_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Index_Embeddings_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<Index_Embeddings_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "index_embeddings" */
export type Index_Embeddings_Aggregate_Fields = {
  __typename?: "index_embeddings_aggregate_fields";
  avg?: Maybe<Index_Embeddings_Avg_Fields>;
  count: Scalars["Int"]["output"];
  max?: Maybe<Index_Embeddings_Max_Fields>;
  min?: Maybe<Index_Embeddings_Min_Fields>;
  stddev?: Maybe<Index_Embeddings_Stddev_Fields>;
  stddev_pop?: Maybe<Index_Embeddings_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Index_Embeddings_Stddev_Samp_Fields>;
  sum?: Maybe<Index_Embeddings_Sum_Fields>;
  var_pop?: Maybe<Index_Embeddings_Var_Pop_Fields>;
  var_samp?: Maybe<Index_Embeddings_Var_Samp_Fields>;
  variance?: Maybe<Index_Embeddings_Variance_Fields>;
};

/** aggregate fields of "index_embeddings" */
export type Index_Embeddings_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Index_Embeddings_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** order by aggregate values of table "index_embeddings" */
export type Index_Embeddings_Aggregate_Order_By = {
  avg?: InputMaybe<Index_Embeddings_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Index_Embeddings_Max_Order_By>;
  min?: InputMaybe<Index_Embeddings_Min_Order_By>;
  stddev?: InputMaybe<Index_Embeddings_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Index_Embeddings_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Index_Embeddings_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Index_Embeddings_Sum_Order_By>;
  var_pop?: InputMaybe<Index_Embeddings_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Index_Embeddings_Var_Samp_Order_By>;
  variance?: InputMaybe<Index_Embeddings_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "index_embeddings" */
export type Index_Embeddings_Arr_Rel_Insert_Input = {
  data: Array<Index_Embeddings_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Index_Embeddings_On_Conflict>;
};

/** aggregate avg on columns */
export type Index_Embeddings_Avg_Fields = {
  __typename?: "index_embeddings_avg_fields";
  duration_time?: Maybe<Scalars["Float"]["output"]>;
  end_time?: Maybe<Scalars["Float"]["output"]>;
  similarity?: Maybe<Scalars["Float"]["output"]>;
  start_time?: Maybe<Scalars["Float"]["output"]>;
};

/** order by avg() on columns of table "index_embeddings" */
export type Index_Embeddings_Avg_Order_By = {
  duration_time?: InputMaybe<Order_By>;
  end_time?: InputMaybe<Order_By>;
  similarity?: InputMaybe<Order_By>;
  start_time?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "index_embeddings". All fields are combined with a logical 'AND'. */
export type Index_Embeddings_Bool_Exp = {
  _and?: InputMaybe<Array<Index_Embeddings_Bool_Exp>>;
  _not?: InputMaybe<Index_Embeddings_Bool_Exp>;
  _or?: InputMaybe<Array<Index_Embeddings_Bool_Exp>>;
  content?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  duration_time?: InputMaybe<Numeric_Comparison_Exp>;
  embedding?: InputMaybe<Vector_Comparison_Exp>;
  end_time?: InputMaybe<Numeric_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  index?: InputMaybe<Indexes_Bool_Exp>;
  index_id?: InputMaybe<Uuid_Comparison_Exp>;
  similarity?: InputMaybe<Numeric_Comparison_Exp>;
  start_time?: InputMaybe<Numeric_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "index_embeddings" */
export enum Index_Embeddings_Constraint {
  /** unique or primary key constraint on columns "id" */
  IndexEmbeddingsPkey = "index_embeddings_pkey",
}

/** columns and relationships of "index_embeddings_gte" */
export type Index_Embeddings_Gte = {
  __typename?: "index_embeddings_gte";
  content: Scalars["String"]["output"];
  created_at: Scalars["timestamptz"]["output"];
  duration_time?: Maybe<Scalars["numeric"]["output"]>;
  embedding: Scalars["vector"]["output"];
  end_time?: Maybe<Scalars["numeric"]["output"]>;
  id: Scalars["uuid"]["output"];
  /** An object relationship */
  index: Indexes;
  index_id: Scalars["uuid"]["output"];
  similarity?: Maybe<Scalars["numeric"]["output"]>;
  start_time?: Maybe<Scalars["numeric"]["output"]>;
  updated_at: Scalars["timestamptz"]["output"];
};

/** aggregated selection of "index_embeddings_gte" */
export type Index_Embeddings_Gte_Aggregate = {
  __typename?: "index_embeddings_gte_aggregate";
  aggregate?: Maybe<Index_Embeddings_Gte_Aggregate_Fields>;
  nodes: Array<Index_Embeddings_Gte>;
};

export type Index_Embeddings_Gte_Aggregate_Bool_Exp = {
  count?: InputMaybe<Index_Embeddings_Gte_Aggregate_Bool_Exp_Count>;
};

export type Index_Embeddings_Gte_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Index_Embeddings_Gte_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<Index_Embeddings_Gte_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "index_embeddings_gte" */
export type Index_Embeddings_Gte_Aggregate_Fields = {
  __typename?: "index_embeddings_gte_aggregate_fields";
  avg?: Maybe<Index_Embeddings_Gte_Avg_Fields>;
  count: Scalars["Int"]["output"];
  max?: Maybe<Index_Embeddings_Gte_Max_Fields>;
  min?: Maybe<Index_Embeddings_Gte_Min_Fields>;
  stddev?: Maybe<Index_Embeddings_Gte_Stddev_Fields>;
  stddev_pop?: Maybe<Index_Embeddings_Gte_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Index_Embeddings_Gte_Stddev_Samp_Fields>;
  sum?: Maybe<Index_Embeddings_Gte_Sum_Fields>;
  var_pop?: Maybe<Index_Embeddings_Gte_Var_Pop_Fields>;
  var_samp?: Maybe<Index_Embeddings_Gte_Var_Samp_Fields>;
  variance?: Maybe<Index_Embeddings_Gte_Variance_Fields>;
};

/** aggregate fields of "index_embeddings_gte" */
export type Index_Embeddings_Gte_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Index_Embeddings_Gte_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** order by aggregate values of table "index_embeddings_gte" */
export type Index_Embeddings_Gte_Aggregate_Order_By = {
  avg?: InputMaybe<Index_Embeddings_Gte_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Index_Embeddings_Gte_Max_Order_By>;
  min?: InputMaybe<Index_Embeddings_Gte_Min_Order_By>;
  stddev?: InputMaybe<Index_Embeddings_Gte_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Index_Embeddings_Gte_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Index_Embeddings_Gte_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Index_Embeddings_Gte_Sum_Order_By>;
  var_pop?: InputMaybe<Index_Embeddings_Gte_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Index_Embeddings_Gte_Var_Samp_Order_By>;
  variance?: InputMaybe<Index_Embeddings_Gte_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "index_embeddings_gte" */
export type Index_Embeddings_Gte_Arr_Rel_Insert_Input = {
  data: Array<Index_Embeddings_Gte_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Index_Embeddings_Gte_On_Conflict>;
};

/** aggregate avg on columns */
export type Index_Embeddings_Gte_Avg_Fields = {
  __typename?: "index_embeddings_gte_avg_fields";
  duration_time?: Maybe<Scalars["Float"]["output"]>;
  end_time?: Maybe<Scalars["Float"]["output"]>;
  similarity?: Maybe<Scalars["Float"]["output"]>;
  start_time?: Maybe<Scalars["Float"]["output"]>;
};

/** order by avg() on columns of table "index_embeddings_gte" */
export type Index_Embeddings_Gte_Avg_Order_By = {
  duration_time?: InputMaybe<Order_By>;
  end_time?: InputMaybe<Order_By>;
  similarity?: InputMaybe<Order_By>;
  start_time?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "index_embeddings_gte". All fields are combined with a logical 'AND'. */
export type Index_Embeddings_Gte_Bool_Exp = {
  _and?: InputMaybe<Array<Index_Embeddings_Gte_Bool_Exp>>;
  _not?: InputMaybe<Index_Embeddings_Gte_Bool_Exp>;
  _or?: InputMaybe<Array<Index_Embeddings_Gte_Bool_Exp>>;
  content?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  duration_time?: InputMaybe<Numeric_Comparison_Exp>;
  embedding?: InputMaybe<Vector_Comparison_Exp>;
  end_time?: InputMaybe<Numeric_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  index?: InputMaybe<Indexes_Bool_Exp>;
  index_id?: InputMaybe<Uuid_Comparison_Exp>;
  similarity?: InputMaybe<Numeric_Comparison_Exp>;
  start_time?: InputMaybe<Numeric_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "index_embeddings_gte" */
export enum Index_Embeddings_Gte_Constraint {
  /** unique or primary key constraint on columns "id" */
  IndexEmbeddingsGtePkey = "index_embeddings_gte_pkey",
}

/** input type for incrementing numeric columns in table "index_embeddings_gte" */
export type Index_Embeddings_Gte_Inc_Input = {
  duration_time?: InputMaybe<Scalars["numeric"]["input"]>;
  end_time?: InputMaybe<Scalars["numeric"]["input"]>;
  similarity?: InputMaybe<Scalars["numeric"]["input"]>;
  start_time?: InputMaybe<Scalars["numeric"]["input"]>;
};

/** input type for inserting data into table "index_embeddings_gte" */
export type Index_Embeddings_Gte_Insert_Input = {
  content?: InputMaybe<Scalars["String"]["input"]>;
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  duration_time?: InputMaybe<Scalars["numeric"]["input"]>;
  embedding?: InputMaybe<Scalars["vector"]["input"]>;
  end_time?: InputMaybe<Scalars["numeric"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  index?: InputMaybe<Indexes_Obj_Rel_Insert_Input>;
  index_id?: InputMaybe<Scalars["uuid"]["input"]>;
  similarity?: InputMaybe<Scalars["numeric"]["input"]>;
  start_time?: InputMaybe<Scalars["numeric"]["input"]>;
  updated_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
};

/** aggregate max on columns */
export type Index_Embeddings_Gte_Max_Fields = {
  __typename?: "index_embeddings_gte_max_fields";
  content?: Maybe<Scalars["String"]["output"]>;
  created_at?: Maybe<Scalars["timestamptz"]["output"]>;
  duration_time?: Maybe<Scalars["numeric"]["output"]>;
  end_time?: Maybe<Scalars["numeric"]["output"]>;
  id?: Maybe<Scalars["uuid"]["output"]>;
  index_id?: Maybe<Scalars["uuid"]["output"]>;
  similarity?: Maybe<Scalars["numeric"]["output"]>;
  start_time?: Maybe<Scalars["numeric"]["output"]>;
  updated_at?: Maybe<Scalars["timestamptz"]["output"]>;
};

/** order by max() on columns of table "index_embeddings_gte" */
export type Index_Embeddings_Gte_Max_Order_By = {
  content?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  duration_time?: InputMaybe<Order_By>;
  end_time?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  index_id?: InputMaybe<Order_By>;
  similarity?: InputMaybe<Order_By>;
  start_time?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Index_Embeddings_Gte_Min_Fields = {
  __typename?: "index_embeddings_gte_min_fields";
  content?: Maybe<Scalars["String"]["output"]>;
  created_at?: Maybe<Scalars["timestamptz"]["output"]>;
  duration_time?: Maybe<Scalars["numeric"]["output"]>;
  end_time?: Maybe<Scalars["numeric"]["output"]>;
  id?: Maybe<Scalars["uuid"]["output"]>;
  index_id?: Maybe<Scalars["uuid"]["output"]>;
  similarity?: Maybe<Scalars["numeric"]["output"]>;
  start_time?: Maybe<Scalars["numeric"]["output"]>;
  updated_at?: Maybe<Scalars["timestamptz"]["output"]>;
};

/** order by min() on columns of table "index_embeddings_gte" */
export type Index_Embeddings_Gte_Min_Order_By = {
  content?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  duration_time?: InputMaybe<Order_By>;
  end_time?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  index_id?: InputMaybe<Order_By>;
  similarity?: InputMaybe<Order_By>;
  start_time?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "index_embeddings_gte" */
export type Index_Embeddings_Gte_Mutation_Response = {
  __typename?: "index_embeddings_gte_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<Index_Embeddings_Gte>;
};

/** on_conflict condition type for table "index_embeddings_gte" */
export type Index_Embeddings_Gte_On_Conflict = {
  constraint: Index_Embeddings_Gte_Constraint;
  update_columns?: Array<Index_Embeddings_Gte_Update_Column>;
  where?: InputMaybe<Index_Embeddings_Gte_Bool_Exp>;
};

/** Ordering options when selecting data from "index_embeddings_gte". */
export type Index_Embeddings_Gte_Order_By = {
  content?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  duration_time?: InputMaybe<Order_By>;
  embedding?: InputMaybe<Order_By>;
  end_time?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  index?: InputMaybe<Indexes_Order_By>;
  index_id?: InputMaybe<Order_By>;
  similarity?: InputMaybe<Order_By>;
  start_time?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: index_embeddings_gte */
export type Index_Embeddings_Gte_Pk_Columns_Input = {
  id: Scalars["uuid"]["input"];
};

/** select columns of table "index_embeddings_gte" */
export enum Index_Embeddings_Gte_Select_Column {
  /** column name */
  Content = "content",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  DurationTime = "duration_time",
  /** column name */
  Embedding = "embedding",
  /** column name */
  EndTime = "end_time",
  /** column name */
  Id = "id",
  /** column name */
  IndexId = "index_id",
  /** column name */
  Similarity = "similarity",
  /** column name */
  StartTime = "start_time",
  /** column name */
  UpdatedAt = "updated_at",
}

/** input type for updating data in table "index_embeddings_gte" */
export type Index_Embeddings_Gte_Set_Input = {
  content?: InputMaybe<Scalars["String"]["input"]>;
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  duration_time?: InputMaybe<Scalars["numeric"]["input"]>;
  embedding?: InputMaybe<Scalars["vector"]["input"]>;
  end_time?: InputMaybe<Scalars["numeric"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  index_id?: InputMaybe<Scalars["uuid"]["input"]>;
  similarity?: InputMaybe<Scalars["numeric"]["input"]>;
  start_time?: InputMaybe<Scalars["numeric"]["input"]>;
  updated_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
};

/** aggregate stddev on columns */
export type Index_Embeddings_Gte_Stddev_Fields = {
  __typename?: "index_embeddings_gte_stddev_fields";
  duration_time?: Maybe<Scalars["Float"]["output"]>;
  end_time?: Maybe<Scalars["Float"]["output"]>;
  similarity?: Maybe<Scalars["Float"]["output"]>;
  start_time?: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev() on columns of table "index_embeddings_gte" */
export type Index_Embeddings_Gte_Stddev_Order_By = {
  duration_time?: InputMaybe<Order_By>;
  end_time?: InputMaybe<Order_By>;
  similarity?: InputMaybe<Order_By>;
  start_time?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Index_Embeddings_Gte_Stddev_Pop_Fields = {
  __typename?: "index_embeddings_gte_stddev_pop_fields";
  duration_time?: Maybe<Scalars["Float"]["output"]>;
  end_time?: Maybe<Scalars["Float"]["output"]>;
  similarity?: Maybe<Scalars["Float"]["output"]>;
  start_time?: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev_pop() on columns of table "index_embeddings_gte" */
export type Index_Embeddings_Gte_Stddev_Pop_Order_By = {
  duration_time?: InputMaybe<Order_By>;
  end_time?: InputMaybe<Order_By>;
  similarity?: InputMaybe<Order_By>;
  start_time?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Index_Embeddings_Gte_Stddev_Samp_Fields = {
  __typename?: "index_embeddings_gte_stddev_samp_fields";
  duration_time?: Maybe<Scalars["Float"]["output"]>;
  end_time?: Maybe<Scalars["Float"]["output"]>;
  similarity?: Maybe<Scalars["Float"]["output"]>;
  start_time?: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev_samp() on columns of table "index_embeddings_gte" */
export type Index_Embeddings_Gte_Stddev_Samp_Order_By = {
  duration_time?: InputMaybe<Order_By>;
  end_time?: InputMaybe<Order_By>;
  similarity?: InputMaybe<Order_By>;
  start_time?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "index_embeddings_gte" */
export type Index_Embeddings_Gte_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Index_Embeddings_Gte_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Index_Embeddings_Gte_Stream_Cursor_Value_Input = {
  content?: InputMaybe<Scalars["String"]["input"]>;
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  duration_time?: InputMaybe<Scalars["numeric"]["input"]>;
  embedding?: InputMaybe<Scalars["vector"]["input"]>;
  end_time?: InputMaybe<Scalars["numeric"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  index_id?: InputMaybe<Scalars["uuid"]["input"]>;
  similarity?: InputMaybe<Scalars["numeric"]["input"]>;
  start_time?: InputMaybe<Scalars["numeric"]["input"]>;
  updated_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
};

/** aggregate sum on columns */
export type Index_Embeddings_Gte_Sum_Fields = {
  __typename?: "index_embeddings_gte_sum_fields";
  duration_time?: Maybe<Scalars["numeric"]["output"]>;
  end_time?: Maybe<Scalars["numeric"]["output"]>;
  similarity?: Maybe<Scalars["numeric"]["output"]>;
  start_time?: Maybe<Scalars["numeric"]["output"]>;
};

/** order by sum() on columns of table "index_embeddings_gte" */
export type Index_Embeddings_Gte_Sum_Order_By = {
  duration_time?: InputMaybe<Order_By>;
  end_time?: InputMaybe<Order_By>;
  similarity?: InputMaybe<Order_By>;
  start_time?: InputMaybe<Order_By>;
};

/** update columns of table "index_embeddings_gte" */
export enum Index_Embeddings_Gte_Update_Column {
  /** column name */
  Content = "content",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  DurationTime = "duration_time",
  /** column name */
  Embedding = "embedding",
  /** column name */
  EndTime = "end_time",
  /** column name */
  Id = "id",
  /** column name */
  IndexId = "index_id",
  /** column name */
  Similarity = "similarity",
  /** column name */
  StartTime = "start_time",
  /** column name */
  UpdatedAt = "updated_at",
}

export type Index_Embeddings_Gte_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Index_Embeddings_Gte_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Index_Embeddings_Gte_Set_Input>;
  /** filter the rows which have to be updated */
  where: Index_Embeddings_Gte_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Index_Embeddings_Gte_Var_Pop_Fields = {
  __typename?: "index_embeddings_gte_var_pop_fields";
  duration_time?: Maybe<Scalars["Float"]["output"]>;
  end_time?: Maybe<Scalars["Float"]["output"]>;
  similarity?: Maybe<Scalars["Float"]["output"]>;
  start_time?: Maybe<Scalars["Float"]["output"]>;
};

/** order by var_pop() on columns of table "index_embeddings_gte" */
export type Index_Embeddings_Gte_Var_Pop_Order_By = {
  duration_time?: InputMaybe<Order_By>;
  end_time?: InputMaybe<Order_By>;
  similarity?: InputMaybe<Order_By>;
  start_time?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Index_Embeddings_Gte_Var_Samp_Fields = {
  __typename?: "index_embeddings_gte_var_samp_fields";
  duration_time?: Maybe<Scalars["Float"]["output"]>;
  end_time?: Maybe<Scalars["Float"]["output"]>;
  similarity?: Maybe<Scalars["Float"]["output"]>;
  start_time?: Maybe<Scalars["Float"]["output"]>;
};

/** order by var_samp() on columns of table "index_embeddings_gte" */
export type Index_Embeddings_Gte_Var_Samp_Order_By = {
  duration_time?: InputMaybe<Order_By>;
  end_time?: InputMaybe<Order_By>;
  similarity?: InputMaybe<Order_By>;
  start_time?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Index_Embeddings_Gte_Variance_Fields = {
  __typename?: "index_embeddings_gte_variance_fields";
  duration_time?: Maybe<Scalars["Float"]["output"]>;
  end_time?: Maybe<Scalars["Float"]["output"]>;
  similarity?: Maybe<Scalars["Float"]["output"]>;
  start_time?: Maybe<Scalars["Float"]["output"]>;
};

/** order by variance() on columns of table "index_embeddings_gte" */
export type Index_Embeddings_Gte_Variance_Order_By = {
  duration_time?: InputMaybe<Order_By>;
  end_time?: InputMaybe<Order_By>;
  similarity?: InputMaybe<Order_By>;
  start_time?: InputMaybe<Order_By>;
};

/** input type for incrementing numeric columns in table "index_embeddings" */
export type Index_Embeddings_Inc_Input = {
  duration_time?: InputMaybe<Scalars["numeric"]["input"]>;
  end_time?: InputMaybe<Scalars["numeric"]["input"]>;
  similarity?: InputMaybe<Scalars["numeric"]["input"]>;
  start_time?: InputMaybe<Scalars["numeric"]["input"]>;
};

/** input type for inserting data into table "index_embeddings" */
export type Index_Embeddings_Insert_Input = {
  content?: InputMaybe<Scalars["String"]["input"]>;
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  duration_time?: InputMaybe<Scalars["numeric"]["input"]>;
  embedding?: InputMaybe<Scalars["vector"]["input"]>;
  end_time?: InputMaybe<Scalars["numeric"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  index?: InputMaybe<Indexes_Obj_Rel_Insert_Input>;
  index_id?: InputMaybe<Scalars["uuid"]["input"]>;
  similarity?: InputMaybe<Scalars["numeric"]["input"]>;
  start_time?: InputMaybe<Scalars["numeric"]["input"]>;
  updated_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
};

/** columns and relationships of "index_embeddings_jss" */
export type Index_Embeddings_Jss = {
  __typename?: "index_embeddings_jss";
  content: Scalars["String"]["output"];
  created_at: Scalars["timestamptz"]["output"];
  duration_time?: Maybe<Scalars["numeric"]["output"]>;
  embedding: Scalars["vector"]["output"];
  end_time?: Maybe<Scalars["numeric"]["output"]>;
  id: Scalars["uuid"]["output"];
  /** An object relationship */
  index: Indexes;
  index_id: Scalars["uuid"]["output"];
  similarity?: Maybe<Scalars["numeric"]["output"]>;
  start_time?: Maybe<Scalars["numeric"]["output"]>;
  updated_at: Scalars["timestamptz"]["output"];
};

/** aggregated selection of "index_embeddings_jss" */
export type Index_Embeddings_Jss_Aggregate = {
  __typename?: "index_embeddings_jss_aggregate";
  aggregate?: Maybe<Index_Embeddings_Jss_Aggregate_Fields>;
  nodes: Array<Index_Embeddings_Jss>;
};

export type Index_Embeddings_Jss_Aggregate_Bool_Exp = {
  count?: InputMaybe<Index_Embeddings_Jss_Aggregate_Bool_Exp_Count>;
};

export type Index_Embeddings_Jss_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Index_Embeddings_Jss_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<Index_Embeddings_Jss_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "index_embeddings_jss" */
export type Index_Embeddings_Jss_Aggregate_Fields = {
  __typename?: "index_embeddings_jss_aggregate_fields";
  avg?: Maybe<Index_Embeddings_Jss_Avg_Fields>;
  count: Scalars["Int"]["output"];
  max?: Maybe<Index_Embeddings_Jss_Max_Fields>;
  min?: Maybe<Index_Embeddings_Jss_Min_Fields>;
  stddev?: Maybe<Index_Embeddings_Jss_Stddev_Fields>;
  stddev_pop?: Maybe<Index_Embeddings_Jss_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Index_Embeddings_Jss_Stddev_Samp_Fields>;
  sum?: Maybe<Index_Embeddings_Jss_Sum_Fields>;
  var_pop?: Maybe<Index_Embeddings_Jss_Var_Pop_Fields>;
  var_samp?: Maybe<Index_Embeddings_Jss_Var_Samp_Fields>;
  variance?: Maybe<Index_Embeddings_Jss_Variance_Fields>;
};

/** aggregate fields of "index_embeddings_jss" */
export type Index_Embeddings_Jss_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Index_Embeddings_Jss_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** order by aggregate values of table "index_embeddings_jss" */
export type Index_Embeddings_Jss_Aggregate_Order_By = {
  avg?: InputMaybe<Index_Embeddings_Jss_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Index_Embeddings_Jss_Max_Order_By>;
  min?: InputMaybe<Index_Embeddings_Jss_Min_Order_By>;
  stddev?: InputMaybe<Index_Embeddings_Jss_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Index_Embeddings_Jss_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Index_Embeddings_Jss_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Index_Embeddings_Jss_Sum_Order_By>;
  var_pop?: InputMaybe<Index_Embeddings_Jss_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Index_Embeddings_Jss_Var_Samp_Order_By>;
  variance?: InputMaybe<Index_Embeddings_Jss_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "index_embeddings_jss" */
export type Index_Embeddings_Jss_Arr_Rel_Insert_Input = {
  data: Array<Index_Embeddings_Jss_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Index_Embeddings_Jss_On_Conflict>;
};

/** aggregate avg on columns */
export type Index_Embeddings_Jss_Avg_Fields = {
  __typename?: "index_embeddings_jss_avg_fields";
  duration_time?: Maybe<Scalars["Float"]["output"]>;
  end_time?: Maybe<Scalars["Float"]["output"]>;
  similarity?: Maybe<Scalars["Float"]["output"]>;
  start_time?: Maybe<Scalars["Float"]["output"]>;
};

/** order by avg() on columns of table "index_embeddings_jss" */
export type Index_Embeddings_Jss_Avg_Order_By = {
  duration_time?: InputMaybe<Order_By>;
  end_time?: InputMaybe<Order_By>;
  similarity?: InputMaybe<Order_By>;
  start_time?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "index_embeddings_jss". All fields are combined with a logical 'AND'. */
export type Index_Embeddings_Jss_Bool_Exp = {
  _and?: InputMaybe<Array<Index_Embeddings_Jss_Bool_Exp>>;
  _not?: InputMaybe<Index_Embeddings_Jss_Bool_Exp>;
  _or?: InputMaybe<Array<Index_Embeddings_Jss_Bool_Exp>>;
  content?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  duration_time?: InputMaybe<Numeric_Comparison_Exp>;
  embedding?: InputMaybe<Vector_Comparison_Exp>;
  end_time?: InputMaybe<Numeric_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  index?: InputMaybe<Indexes_Bool_Exp>;
  index_id?: InputMaybe<Uuid_Comparison_Exp>;
  similarity?: InputMaybe<Numeric_Comparison_Exp>;
  start_time?: InputMaybe<Numeric_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "index_embeddings_jss" */
export enum Index_Embeddings_Jss_Constraint {
  /** unique or primary key constraint on columns "id" */
  IndexEmbeddingsTwoPkey = "index_embeddings_two_pkey",
}

/** input type for incrementing numeric columns in table "index_embeddings_jss" */
export type Index_Embeddings_Jss_Inc_Input = {
  duration_time?: InputMaybe<Scalars["numeric"]["input"]>;
  end_time?: InputMaybe<Scalars["numeric"]["input"]>;
  similarity?: InputMaybe<Scalars["numeric"]["input"]>;
  start_time?: InputMaybe<Scalars["numeric"]["input"]>;
};

/** input type for inserting data into table "index_embeddings_jss" */
export type Index_Embeddings_Jss_Insert_Input = {
  content?: InputMaybe<Scalars["String"]["input"]>;
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  duration_time?: InputMaybe<Scalars["numeric"]["input"]>;
  embedding?: InputMaybe<Scalars["vector"]["input"]>;
  end_time?: InputMaybe<Scalars["numeric"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  index?: InputMaybe<Indexes_Obj_Rel_Insert_Input>;
  index_id?: InputMaybe<Scalars["uuid"]["input"]>;
  similarity?: InputMaybe<Scalars["numeric"]["input"]>;
  start_time?: InputMaybe<Scalars["numeric"]["input"]>;
  updated_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
};

/** aggregate max on columns */
export type Index_Embeddings_Jss_Max_Fields = {
  __typename?: "index_embeddings_jss_max_fields";
  content?: Maybe<Scalars["String"]["output"]>;
  created_at?: Maybe<Scalars["timestamptz"]["output"]>;
  duration_time?: Maybe<Scalars["numeric"]["output"]>;
  end_time?: Maybe<Scalars["numeric"]["output"]>;
  id?: Maybe<Scalars["uuid"]["output"]>;
  index_id?: Maybe<Scalars["uuid"]["output"]>;
  similarity?: Maybe<Scalars["numeric"]["output"]>;
  start_time?: Maybe<Scalars["numeric"]["output"]>;
  updated_at?: Maybe<Scalars["timestamptz"]["output"]>;
};

/** order by max() on columns of table "index_embeddings_jss" */
export type Index_Embeddings_Jss_Max_Order_By = {
  content?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  duration_time?: InputMaybe<Order_By>;
  end_time?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  index_id?: InputMaybe<Order_By>;
  similarity?: InputMaybe<Order_By>;
  start_time?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Index_Embeddings_Jss_Min_Fields = {
  __typename?: "index_embeddings_jss_min_fields";
  content?: Maybe<Scalars["String"]["output"]>;
  created_at?: Maybe<Scalars["timestamptz"]["output"]>;
  duration_time?: Maybe<Scalars["numeric"]["output"]>;
  end_time?: Maybe<Scalars["numeric"]["output"]>;
  id?: Maybe<Scalars["uuid"]["output"]>;
  index_id?: Maybe<Scalars["uuid"]["output"]>;
  similarity?: Maybe<Scalars["numeric"]["output"]>;
  start_time?: Maybe<Scalars["numeric"]["output"]>;
  updated_at?: Maybe<Scalars["timestamptz"]["output"]>;
};

/** order by min() on columns of table "index_embeddings_jss" */
export type Index_Embeddings_Jss_Min_Order_By = {
  content?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  duration_time?: InputMaybe<Order_By>;
  end_time?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  index_id?: InputMaybe<Order_By>;
  similarity?: InputMaybe<Order_By>;
  start_time?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "index_embeddings_jss" */
export type Index_Embeddings_Jss_Mutation_Response = {
  __typename?: "index_embeddings_jss_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<Index_Embeddings_Jss>;
};

/** on_conflict condition type for table "index_embeddings_jss" */
export type Index_Embeddings_Jss_On_Conflict = {
  constraint: Index_Embeddings_Jss_Constraint;
  update_columns?: Array<Index_Embeddings_Jss_Update_Column>;
  where?: InputMaybe<Index_Embeddings_Jss_Bool_Exp>;
};

/** Ordering options when selecting data from "index_embeddings_jss". */
export type Index_Embeddings_Jss_Order_By = {
  content?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  duration_time?: InputMaybe<Order_By>;
  embedding?: InputMaybe<Order_By>;
  end_time?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  index?: InputMaybe<Indexes_Order_By>;
  index_id?: InputMaybe<Order_By>;
  similarity?: InputMaybe<Order_By>;
  start_time?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: index_embeddings_jss */
export type Index_Embeddings_Jss_Pk_Columns_Input = {
  id: Scalars["uuid"]["input"];
};

/** select columns of table "index_embeddings_jss" */
export enum Index_Embeddings_Jss_Select_Column {
  /** column name */
  Content = "content",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  DurationTime = "duration_time",
  /** column name */
  Embedding = "embedding",
  /** column name */
  EndTime = "end_time",
  /** column name */
  Id = "id",
  /** column name */
  IndexId = "index_id",
  /** column name */
  Similarity = "similarity",
  /** column name */
  StartTime = "start_time",
  /** column name */
  UpdatedAt = "updated_at",
}

/** input type for updating data in table "index_embeddings_jss" */
export type Index_Embeddings_Jss_Set_Input = {
  content?: InputMaybe<Scalars["String"]["input"]>;
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  duration_time?: InputMaybe<Scalars["numeric"]["input"]>;
  embedding?: InputMaybe<Scalars["vector"]["input"]>;
  end_time?: InputMaybe<Scalars["numeric"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  index_id?: InputMaybe<Scalars["uuid"]["input"]>;
  similarity?: InputMaybe<Scalars["numeric"]["input"]>;
  start_time?: InputMaybe<Scalars["numeric"]["input"]>;
  updated_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
};

/** aggregate stddev on columns */
export type Index_Embeddings_Jss_Stddev_Fields = {
  __typename?: "index_embeddings_jss_stddev_fields";
  duration_time?: Maybe<Scalars["Float"]["output"]>;
  end_time?: Maybe<Scalars["Float"]["output"]>;
  similarity?: Maybe<Scalars["Float"]["output"]>;
  start_time?: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev() on columns of table "index_embeddings_jss" */
export type Index_Embeddings_Jss_Stddev_Order_By = {
  duration_time?: InputMaybe<Order_By>;
  end_time?: InputMaybe<Order_By>;
  similarity?: InputMaybe<Order_By>;
  start_time?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Index_Embeddings_Jss_Stddev_Pop_Fields = {
  __typename?: "index_embeddings_jss_stddev_pop_fields";
  duration_time?: Maybe<Scalars["Float"]["output"]>;
  end_time?: Maybe<Scalars["Float"]["output"]>;
  similarity?: Maybe<Scalars["Float"]["output"]>;
  start_time?: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev_pop() on columns of table "index_embeddings_jss" */
export type Index_Embeddings_Jss_Stddev_Pop_Order_By = {
  duration_time?: InputMaybe<Order_By>;
  end_time?: InputMaybe<Order_By>;
  similarity?: InputMaybe<Order_By>;
  start_time?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Index_Embeddings_Jss_Stddev_Samp_Fields = {
  __typename?: "index_embeddings_jss_stddev_samp_fields";
  duration_time?: Maybe<Scalars["Float"]["output"]>;
  end_time?: Maybe<Scalars["Float"]["output"]>;
  similarity?: Maybe<Scalars["Float"]["output"]>;
  start_time?: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev_samp() on columns of table "index_embeddings_jss" */
export type Index_Embeddings_Jss_Stddev_Samp_Order_By = {
  duration_time?: InputMaybe<Order_By>;
  end_time?: InputMaybe<Order_By>;
  similarity?: InputMaybe<Order_By>;
  start_time?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "index_embeddings_jss" */
export type Index_Embeddings_Jss_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Index_Embeddings_Jss_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Index_Embeddings_Jss_Stream_Cursor_Value_Input = {
  content?: InputMaybe<Scalars["String"]["input"]>;
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  duration_time?: InputMaybe<Scalars["numeric"]["input"]>;
  embedding?: InputMaybe<Scalars["vector"]["input"]>;
  end_time?: InputMaybe<Scalars["numeric"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  index_id?: InputMaybe<Scalars["uuid"]["input"]>;
  similarity?: InputMaybe<Scalars["numeric"]["input"]>;
  start_time?: InputMaybe<Scalars["numeric"]["input"]>;
  updated_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
};

/** aggregate sum on columns */
export type Index_Embeddings_Jss_Sum_Fields = {
  __typename?: "index_embeddings_jss_sum_fields";
  duration_time?: Maybe<Scalars["numeric"]["output"]>;
  end_time?: Maybe<Scalars["numeric"]["output"]>;
  similarity?: Maybe<Scalars["numeric"]["output"]>;
  start_time?: Maybe<Scalars["numeric"]["output"]>;
};

/** order by sum() on columns of table "index_embeddings_jss" */
export type Index_Embeddings_Jss_Sum_Order_By = {
  duration_time?: InputMaybe<Order_By>;
  end_time?: InputMaybe<Order_By>;
  similarity?: InputMaybe<Order_By>;
  start_time?: InputMaybe<Order_By>;
};

/** update columns of table "index_embeddings_jss" */
export enum Index_Embeddings_Jss_Update_Column {
  /** column name */
  Content = "content",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  DurationTime = "duration_time",
  /** column name */
  Embedding = "embedding",
  /** column name */
  EndTime = "end_time",
  /** column name */
  Id = "id",
  /** column name */
  IndexId = "index_id",
  /** column name */
  Similarity = "similarity",
  /** column name */
  StartTime = "start_time",
  /** column name */
  UpdatedAt = "updated_at",
}

export type Index_Embeddings_Jss_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Index_Embeddings_Jss_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Index_Embeddings_Jss_Set_Input>;
  /** filter the rows which have to be updated */
  where: Index_Embeddings_Jss_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Index_Embeddings_Jss_Var_Pop_Fields = {
  __typename?: "index_embeddings_jss_var_pop_fields";
  duration_time?: Maybe<Scalars["Float"]["output"]>;
  end_time?: Maybe<Scalars["Float"]["output"]>;
  similarity?: Maybe<Scalars["Float"]["output"]>;
  start_time?: Maybe<Scalars["Float"]["output"]>;
};

/** order by var_pop() on columns of table "index_embeddings_jss" */
export type Index_Embeddings_Jss_Var_Pop_Order_By = {
  duration_time?: InputMaybe<Order_By>;
  end_time?: InputMaybe<Order_By>;
  similarity?: InputMaybe<Order_By>;
  start_time?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Index_Embeddings_Jss_Var_Samp_Fields = {
  __typename?: "index_embeddings_jss_var_samp_fields";
  duration_time?: Maybe<Scalars["Float"]["output"]>;
  end_time?: Maybe<Scalars["Float"]["output"]>;
  similarity?: Maybe<Scalars["Float"]["output"]>;
  start_time?: Maybe<Scalars["Float"]["output"]>;
};

/** order by var_samp() on columns of table "index_embeddings_jss" */
export type Index_Embeddings_Jss_Var_Samp_Order_By = {
  duration_time?: InputMaybe<Order_By>;
  end_time?: InputMaybe<Order_By>;
  similarity?: InputMaybe<Order_By>;
  start_time?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Index_Embeddings_Jss_Variance_Fields = {
  __typename?: "index_embeddings_jss_variance_fields";
  duration_time?: Maybe<Scalars["Float"]["output"]>;
  end_time?: Maybe<Scalars["Float"]["output"]>;
  similarity?: Maybe<Scalars["Float"]["output"]>;
  start_time?: Maybe<Scalars["Float"]["output"]>;
};

/** order by variance() on columns of table "index_embeddings_jss" */
export type Index_Embeddings_Jss_Variance_Order_By = {
  duration_time?: InputMaybe<Order_By>;
  end_time?: InputMaybe<Order_By>;
  similarity?: InputMaybe<Order_By>;
  start_time?: InputMaybe<Order_By>;
};

/** aggregate max on columns */
export type Index_Embeddings_Max_Fields = {
  __typename?: "index_embeddings_max_fields";
  content?: Maybe<Scalars["String"]["output"]>;
  created_at?: Maybe<Scalars["timestamptz"]["output"]>;
  duration_time?: Maybe<Scalars["numeric"]["output"]>;
  end_time?: Maybe<Scalars["numeric"]["output"]>;
  id?: Maybe<Scalars["uuid"]["output"]>;
  index_id?: Maybe<Scalars["uuid"]["output"]>;
  similarity?: Maybe<Scalars["numeric"]["output"]>;
  start_time?: Maybe<Scalars["numeric"]["output"]>;
  updated_at?: Maybe<Scalars["timestamptz"]["output"]>;
};

/** order by max() on columns of table "index_embeddings" */
export type Index_Embeddings_Max_Order_By = {
  content?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  duration_time?: InputMaybe<Order_By>;
  end_time?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  index_id?: InputMaybe<Order_By>;
  similarity?: InputMaybe<Order_By>;
  start_time?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Index_Embeddings_Min_Fields = {
  __typename?: "index_embeddings_min_fields";
  content?: Maybe<Scalars["String"]["output"]>;
  created_at?: Maybe<Scalars["timestamptz"]["output"]>;
  duration_time?: Maybe<Scalars["numeric"]["output"]>;
  end_time?: Maybe<Scalars["numeric"]["output"]>;
  id?: Maybe<Scalars["uuid"]["output"]>;
  index_id?: Maybe<Scalars["uuid"]["output"]>;
  similarity?: Maybe<Scalars["numeric"]["output"]>;
  start_time?: Maybe<Scalars["numeric"]["output"]>;
  updated_at?: Maybe<Scalars["timestamptz"]["output"]>;
};

/** order by min() on columns of table "index_embeddings" */
export type Index_Embeddings_Min_Order_By = {
  content?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  duration_time?: InputMaybe<Order_By>;
  end_time?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  index_id?: InputMaybe<Order_By>;
  similarity?: InputMaybe<Order_By>;
  start_time?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "index_embeddings" */
export type Index_Embeddings_Mutation_Response = {
  __typename?: "index_embeddings_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<Index_Embeddings>;
};

/** on_conflict condition type for table "index_embeddings" */
export type Index_Embeddings_On_Conflict = {
  constraint: Index_Embeddings_Constraint;
  update_columns?: Array<Index_Embeddings_Update_Column>;
  where?: InputMaybe<Index_Embeddings_Bool_Exp>;
};

/** Ordering options when selecting data from "index_embeddings". */
export type Index_Embeddings_Order_By = {
  content?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  duration_time?: InputMaybe<Order_By>;
  embedding?: InputMaybe<Order_By>;
  end_time?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  index?: InputMaybe<Indexes_Order_By>;
  index_id?: InputMaybe<Order_By>;
  similarity?: InputMaybe<Order_By>;
  start_time?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: index_embeddings */
export type Index_Embeddings_Pk_Columns_Input = {
  id: Scalars["uuid"]["input"];
};

/** select columns of table "index_embeddings" */
export enum Index_Embeddings_Select_Column {
  /** column name */
  Content = "content",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  DurationTime = "duration_time",
  /** column name */
  Embedding = "embedding",
  /** column name */
  EndTime = "end_time",
  /** column name */
  Id = "id",
  /** column name */
  IndexId = "index_id",
  /** column name */
  Similarity = "similarity",
  /** column name */
  StartTime = "start_time",
  /** column name */
  UpdatedAt = "updated_at",
}

/** input type for updating data in table "index_embeddings" */
export type Index_Embeddings_Set_Input = {
  content?: InputMaybe<Scalars["String"]["input"]>;
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  duration_time?: InputMaybe<Scalars["numeric"]["input"]>;
  embedding?: InputMaybe<Scalars["vector"]["input"]>;
  end_time?: InputMaybe<Scalars["numeric"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  index_id?: InputMaybe<Scalars["uuid"]["input"]>;
  similarity?: InputMaybe<Scalars["numeric"]["input"]>;
  start_time?: InputMaybe<Scalars["numeric"]["input"]>;
  updated_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
};

/** aggregate stddev on columns */
export type Index_Embeddings_Stddev_Fields = {
  __typename?: "index_embeddings_stddev_fields";
  duration_time?: Maybe<Scalars["Float"]["output"]>;
  end_time?: Maybe<Scalars["Float"]["output"]>;
  similarity?: Maybe<Scalars["Float"]["output"]>;
  start_time?: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev() on columns of table "index_embeddings" */
export type Index_Embeddings_Stddev_Order_By = {
  duration_time?: InputMaybe<Order_By>;
  end_time?: InputMaybe<Order_By>;
  similarity?: InputMaybe<Order_By>;
  start_time?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Index_Embeddings_Stddev_Pop_Fields = {
  __typename?: "index_embeddings_stddev_pop_fields";
  duration_time?: Maybe<Scalars["Float"]["output"]>;
  end_time?: Maybe<Scalars["Float"]["output"]>;
  similarity?: Maybe<Scalars["Float"]["output"]>;
  start_time?: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev_pop() on columns of table "index_embeddings" */
export type Index_Embeddings_Stddev_Pop_Order_By = {
  duration_time?: InputMaybe<Order_By>;
  end_time?: InputMaybe<Order_By>;
  similarity?: InputMaybe<Order_By>;
  start_time?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Index_Embeddings_Stddev_Samp_Fields = {
  __typename?: "index_embeddings_stddev_samp_fields";
  duration_time?: Maybe<Scalars["Float"]["output"]>;
  end_time?: Maybe<Scalars["Float"]["output"]>;
  similarity?: Maybe<Scalars["Float"]["output"]>;
  start_time?: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev_samp() on columns of table "index_embeddings" */
export type Index_Embeddings_Stddev_Samp_Order_By = {
  duration_time?: InputMaybe<Order_By>;
  end_time?: InputMaybe<Order_By>;
  similarity?: InputMaybe<Order_By>;
  start_time?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "index_embeddings" */
export type Index_Embeddings_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Index_Embeddings_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Index_Embeddings_Stream_Cursor_Value_Input = {
  content?: InputMaybe<Scalars["String"]["input"]>;
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  duration_time?: InputMaybe<Scalars["numeric"]["input"]>;
  embedding?: InputMaybe<Scalars["vector"]["input"]>;
  end_time?: InputMaybe<Scalars["numeric"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  index_id?: InputMaybe<Scalars["uuid"]["input"]>;
  similarity?: InputMaybe<Scalars["numeric"]["input"]>;
  start_time?: InputMaybe<Scalars["numeric"]["input"]>;
  updated_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
};

/** aggregate sum on columns */
export type Index_Embeddings_Sum_Fields = {
  __typename?: "index_embeddings_sum_fields";
  duration_time?: Maybe<Scalars["numeric"]["output"]>;
  end_time?: Maybe<Scalars["numeric"]["output"]>;
  similarity?: Maybe<Scalars["numeric"]["output"]>;
  start_time?: Maybe<Scalars["numeric"]["output"]>;
};

/** order by sum() on columns of table "index_embeddings" */
export type Index_Embeddings_Sum_Order_By = {
  duration_time?: InputMaybe<Order_By>;
  end_time?: InputMaybe<Order_By>;
  similarity?: InputMaybe<Order_By>;
  start_time?: InputMaybe<Order_By>;
};

/** update columns of table "index_embeddings" */
export enum Index_Embeddings_Update_Column {
  /** column name */
  Content = "content",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  DurationTime = "duration_time",
  /** column name */
  Embedding = "embedding",
  /** column name */
  EndTime = "end_time",
  /** column name */
  Id = "id",
  /** column name */
  IndexId = "index_id",
  /** column name */
  Similarity = "similarity",
  /** column name */
  StartTime = "start_time",
  /** column name */
  UpdatedAt = "updated_at",
}

export type Index_Embeddings_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Index_Embeddings_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Index_Embeddings_Set_Input>;
  /** filter the rows which have to be updated */
  where: Index_Embeddings_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Index_Embeddings_Var_Pop_Fields = {
  __typename?: "index_embeddings_var_pop_fields";
  duration_time?: Maybe<Scalars["Float"]["output"]>;
  end_time?: Maybe<Scalars["Float"]["output"]>;
  similarity?: Maybe<Scalars["Float"]["output"]>;
  start_time?: Maybe<Scalars["Float"]["output"]>;
};

/** order by var_pop() on columns of table "index_embeddings" */
export type Index_Embeddings_Var_Pop_Order_By = {
  duration_time?: InputMaybe<Order_By>;
  end_time?: InputMaybe<Order_By>;
  similarity?: InputMaybe<Order_By>;
  start_time?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Index_Embeddings_Var_Samp_Fields = {
  __typename?: "index_embeddings_var_samp_fields";
  duration_time?: Maybe<Scalars["Float"]["output"]>;
  end_time?: Maybe<Scalars["Float"]["output"]>;
  similarity?: Maybe<Scalars["Float"]["output"]>;
  start_time?: Maybe<Scalars["Float"]["output"]>;
};

/** order by var_samp() on columns of table "index_embeddings" */
export type Index_Embeddings_Var_Samp_Order_By = {
  duration_time?: InputMaybe<Order_By>;
  end_time?: InputMaybe<Order_By>;
  similarity?: InputMaybe<Order_By>;
  start_time?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Index_Embeddings_Variance_Fields = {
  __typename?: "index_embeddings_variance_fields";
  duration_time?: Maybe<Scalars["Float"]["output"]>;
  end_time?: Maybe<Scalars["Float"]["output"]>;
  similarity?: Maybe<Scalars["Float"]["output"]>;
  start_time?: Maybe<Scalars["Float"]["output"]>;
};

/** order by variance() on columns of table "index_embeddings" */
export type Index_Embeddings_Variance_Order_By = {
  duration_time?: InputMaybe<Order_By>;
  end_time?: InputMaybe<Order_By>;
  similarity?: InputMaybe<Order_By>;
  start_time?: InputMaybe<Order_By>;
};

/** columns and relationships of "indexes" */
export type Indexes = {
  __typename?: "indexes";
  active: Scalars["Boolean"]["output"];
  created_at: Scalars["timestamptz"]["output"];
  description?: Maybe<Scalars["String"]["output"]>;
  duration_seconds: Scalars["numeric"]["output"];
  /** An array relationship */
  embeddings: Array<Index_Embeddings>;
  /** An aggregate relationship */
  embeddings_aggregate: Index_Embeddings_Aggregate;
  /** An array relationship */
  embeddings_gte: Array<Index_Embeddings_Gte>;
  /** An aggregate relationship */
  embeddings_gte_aggregate: Index_Embeddings_Gte_Aggregate;
  /** An array relationship */
  embeddings_jss: Array<Index_Embeddings_Jss>;
  /** An aggregate relationship */
  embeddings_jss_aggregate: Index_Embeddings_Jss_Aggregate;
  height?: Maybe<Scalars["Int"]["output"]>;
  id: Scalars["uuid"]["output"];
  nsfw: Scalars["Boolean"]["output"];
  similarity?: Maybe<Scalars["numeric"]["output"]>;
  status: Scalars["String"]["output"];
  summary_points?: Maybe<Scalars["jsonb"]["output"]>;
  summary_text?: Maybe<Scalars["String"]["output"]>;
  tags: Scalars["jsonb"]["output"];
  title?: Maybe<Scalars["String"]["output"]>;
  transcript?: Maybe<Scalars["String"]["output"]>;
  transcript_timestamped?: Maybe<Scalars["jsonb"]["output"]>;
  updated_at: Scalars["timestamptz"]["output"];
  video_id: Scalars["String"]["output"];
  video_source: Scalars["String"]["output"];
  video_url: Scalars["String"]["output"];
  width?: Maybe<Scalars["Int"]["output"]>;
};

/** columns and relationships of "indexes" */
export type IndexesEmbeddingsArgs = {
  distinct_on?: InputMaybe<Array<Index_Embeddings_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Index_Embeddings_Order_By>>;
  where?: InputMaybe<Index_Embeddings_Bool_Exp>;
};

/** columns and relationships of "indexes" */
export type IndexesEmbeddings_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Index_Embeddings_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Index_Embeddings_Order_By>>;
  where?: InputMaybe<Index_Embeddings_Bool_Exp>;
};

/** columns and relationships of "indexes" */
export type IndexesEmbeddings_GteArgs = {
  distinct_on?: InputMaybe<Array<Index_Embeddings_Gte_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Index_Embeddings_Gte_Order_By>>;
  where?: InputMaybe<Index_Embeddings_Gte_Bool_Exp>;
};

/** columns and relationships of "indexes" */
export type IndexesEmbeddings_Gte_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Index_Embeddings_Gte_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Index_Embeddings_Gte_Order_By>>;
  where?: InputMaybe<Index_Embeddings_Gte_Bool_Exp>;
};

/** columns and relationships of "indexes" */
export type IndexesEmbeddings_JssArgs = {
  distinct_on?: InputMaybe<Array<Index_Embeddings_Jss_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Index_Embeddings_Jss_Order_By>>;
  where?: InputMaybe<Index_Embeddings_Jss_Bool_Exp>;
};

/** columns and relationships of "indexes" */
export type IndexesEmbeddings_Jss_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Index_Embeddings_Jss_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Index_Embeddings_Jss_Order_By>>;
  where?: InputMaybe<Index_Embeddings_Jss_Bool_Exp>;
};

/** columns and relationships of "indexes" */
export type IndexesSummary_PointsArgs = {
  path?: InputMaybe<Scalars["String"]["input"]>;
};

/** columns and relationships of "indexes" */
export type IndexesTagsArgs = {
  path?: InputMaybe<Scalars["String"]["input"]>;
};

/** columns and relationships of "indexes" */
export type IndexesTranscript_TimestampedArgs = {
  path?: InputMaybe<Scalars["String"]["input"]>;
};

/** aggregated selection of "indexes" */
export type Indexes_Aggregate = {
  __typename?: "indexes_aggregate";
  aggregate?: Maybe<Indexes_Aggregate_Fields>;
  nodes: Array<Indexes>;
};

/** aggregate fields of "indexes" */
export type Indexes_Aggregate_Fields = {
  __typename?: "indexes_aggregate_fields";
  avg?: Maybe<Indexes_Avg_Fields>;
  count: Scalars["Int"]["output"];
  max?: Maybe<Indexes_Max_Fields>;
  min?: Maybe<Indexes_Min_Fields>;
  stddev?: Maybe<Indexes_Stddev_Fields>;
  stddev_pop?: Maybe<Indexes_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Indexes_Stddev_Samp_Fields>;
  sum?: Maybe<Indexes_Sum_Fields>;
  var_pop?: Maybe<Indexes_Var_Pop_Fields>;
  var_samp?: Maybe<Indexes_Var_Samp_Fields>;
  variance?: Maybe<Indexes_Variance_Fields>;
};

/** aggregate fields of "indexes" */
export type Indexes_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Indexes_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Indexes_Append_Input = {
  summary_points?: InputMaybe<Scalars["jsonb"]["input"]>;
  tags?: InputMaybe<Scalars["jsonb"]["input"]>;
  transcript_timestamped?: InputMaybe<Scalars["jsonb"]["input"]>;
};

/** aggregate avg on columns */
export type Indexes_Avg_Fields = {
  __typename?: "indexes_avg_fields";
  duration_seconds?: Maybe<Scalars["Float"]["output"]>;
  height?: Maybe<Scalars["Float"]["output"]>;
  similarity?: Maybe<Scalars["Float"]["output"]>;
  width?: Maybe<Scalars["Float"]["output"]>;
};

/** Boolean expression to filter rows from the table "indexes". All fields are combined with a logical 'AND'. */
export type Indexes_Bool_Exp = {
  _and?: InputMaybe<Array<Indexes_Bool_Exp>>;
  _not?: InputMaybe<Indexes_Bool_Exp>;
  _or?: InputMaybe<Array<Indexes_Bool_Exp>>;
  active?: InputMaybe<Boolean_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  duration_seconds?: InputMaybe<Numeric_Comparison_Exp>;
  embeddings?: InputMaybe<Index_Embeddings_Bool_Exp>;
  embeddings_aggregate?: InputMaybe<Index_Embeddings_Aggregate_Bool_Exp>;
  embeddings_gte?: InputMaybe<Index_Embeddings_Gte_Bool_Exp>;
  embeddings_gte_aggregate?: InputMaybe<Index_Embeddings_Gte_Aggregate_Bool_Exp>;
  embeddings_jss?: InputMaybe<Index_Embeddings_Jss_Bool_Exp>;
  embeddings_jss_aggregate?: InputMaybe<Index_Embeddings_Jss_Aggregate_Bool_Exp>;
  height?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  nsfw?: InputMaybe<Boolean_Comparison_Exp>;
  similarity?: InputMaybe<Numeric_Comparison_Exp>;
  status?: InputMaybe<String_Comparison_Exp>;
  summary_points?: InputMaybe<Jsonb_Comparison_Exp>;
  summary_text?: InputMaybe<String_Comparison_Exp>;
  tags?: InputMaybe<Jsonb_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  transcript?: InputMaybe<String_Comparison_Exp>;
  transcript_timestamped?: InputMaybe<Jsonb_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  video_id?: InputMaybe<String_Comparison_Exp>;
  video_source?: InputMaybe<String_Comparison_Exp>;
  video_url?: InputMaybe<String_Comparison_Exp>;
  width?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "indexes" */
export enum Indexes_Constraint {
  /** unique or primary key constraint on columns "id" */
  IndexesPkey = "indexes_pkey",
  /** unique or primary key constraint on columns "video_id" */
  IndexesVideoIdKey = "indexes_video_id_key",
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Indexes_Delete_At_Path_Input = {
  summary_points?: InputMaybe<Array<Scalars["String"]["input"]>>;
  tags?: InputMaybe<Array<Scalars["String"]["input"]>>;
  transcript_timestamped?: InputMaybe<Array<Scalars["String"]["input"]>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Indexes_Delete_Elem_Input = {
  summary_points?: InputMaybe<Scalars["Int"]["input"]>;
  tags?: InputMaybe<Scalars["Int"]["input"]>;
  transcript_timestamped?: InputMaybe<Scalars["Int"]["input"]>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Indexes_Delete_Key_Input = {
  summary_points?: InputMaybe<Scalars["String"]["input"]>;
  tags?: InputMaybe<Scalars["String"]["input"]>;
  transcript_timestamped?: InputMaybe<Scalars["String"]["input"]>;
};

/** input type for incrementing numeric columns in table "indexes" */
export type Indexes_Inc_Input = {
  duration_seconds?: InputMaybe<Scalars["numeric"]["input"]>;
  height?: InputMaybe<Scalars["Int"]["input"]>;
  similarity?: InputMaybe<Scalars["numeric"]["input"]>;
  width?: InputMaybe<Scalars["Int"]["input"]>;
};

/** input type for inserting data into table "indexes" */
export type Indexes_Insert_Input = {
  active?: InputMaybe<Scalars["Boolean"]["input"]>;
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  duration_seconds?: InputMaybe<Scalars["numeric"]["input"]>;
  embeddings?: InputMaybe<Index_Embeddings_Arr_Rel_Insert_Input>;
  embeddings_gte?: InputMaybe<Index_Embeddings_Gte_Arr_Rel_Insert_Input>;
  embeddings_jss?: InputMaybe<Index_Embeddings_Jss_Arr_Rel_Insert_Input>;
  height?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  nsfw?: InputMaybe<Scalars["Boolean"]["input"]>;
  similarity?: InputMaybe<Scalars["numeric"]["input"]>;
  status?: InputMaybe<Scalars["String"]["input"]>;
  summary_points?: InputMaybe<Scalars["jsonb"]["input"]>;
  summary_text?: InputMaybe<Scalars["String"]["input"]>;
  tags?: InputMaybe<Scalars["jsonb"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  transcript?: InputMaybe<Scalars["String"]["input"]>;
  transcript_timestamped?: InputMaybe<Scalars["jsonb"]["input"]>;
  updated_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  video_id?: InputMaybe<Scalars["String"]["input"]>;
  video_source?: InputMaybe<Scalars["String"]["input"]>;
  video_url?: InputMaybe<Scalars["String"]["input"]>;
  width?: InputMaybe<Scalars["Int"]["input"]>;
};

/** aggregate max on columns */
export type Indexes_Max_Fields = {
  __typename?: "indexes_max_fields";
  created_at?: Maybe<Scalars["timestamptz"]["output"]>;
  description?: Maybe<Scalars["String"]["output"]>;
  duration_seconds?: Maybe<Scalars["numeric"]["output"]>;
  height?: Maybe<Scalars["Int"]["output"]>;
  id?: Maybe<Scalars["uuid"]["output"]>;
  similarity?: Maybe<Scalars["numeric"]["output"]>;
  status?: Maybe<Scalars["String"]["output"]>;
  summary_text?: Maybe<Scalars["String"]["output"]>;
  title?: Maybe<Scalars["String"]["output"]>;
  transcript?: Maybe<Scalars["String"]["output"]>;
  updated_at?: Maybe<Scalars["timestamptz"]["output"]>;
  video_id?: Maybe<Scalars["String"]["output"]>;
  video_source?: Maybe<Scalars["String"]["output"]>;
  video_url?: Maybe<Scalars["String"]["output"]>;
  width?: Maybe<Scalars["Int"]["output"]>;
};

/** aggregate min on columns */
export type Indexes_Min_Fields = {
  __typename?: "indexes_min_fields";
  created_at?: Maybe<Scalars["timestamptz"]["output"]>;
  description?: Maybe<Scalars["String"]["output"]>;
  duration_seconds?: Maybe<Scalars["numeric"]["output"]>;
  height?: Maybe<Scalars["Int"]["output"]>;
  id?: Maybe<Scalars["uuid"]["output"]>;
  similarity?: Maybe<Scalars["numeric"]["output"]>;
  status?: Maybe<Scalars["String"]["output"]>;
  summary_text?: Maybe<Scalars["String"]["output"]>;
  title?: Maybe<Scalars["String"]["output"]>;
  transcript?: Maybe<Scalars["String"]["output"]>;
  updated_at?: Maybe<Scalars["timestamptz"]["output"]>;
  video_id?: Maybe<Scalars["String"]["output"]>;
  video_source?: Maybe<Scalars["String"]["output"]>;
  video_url?: Maybe<Scalars["String"]["output"]>;
  width?: Maybe<Scalars["Int"]["output"]>;
};

/** response of any mutation on the table "indexes" */
export type Indexes_Mutation_Response = {
  __typename?: "indexes_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<Indexes>;
};

/** input type for inserting object relation for remote table "indexes" */
export type Indexes_Obj_Rel_Insert_Input = {
  data: Indexes_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Indexes_On_Conflict>;
};

/** on_conflict condition type for table "indexes" */
export type Indexes_On_Conflict = {
  constraint: Indexes_Constraint;
  update_columns?: Array<Indexes_Update_Column>;
  where?: InputMaybe<Indexes_Bool_Exp>;
};

/** Ordering options when selecting data from "indexes". */
export type Indexes_Order_By = {
  active?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  duration_seconds?: InputMaybe<Order_By>;
  embeddings_aggregate?: InputMaybe<Index_Embeddings_Aggregate_Order_By>;
  embeddings_gte_aggregate?: InputMaybe<Index_Embeddings_Gte_Aggregate_Order_By>;
  embeddings_jss_aggregate?: InputMaybe<Index_Embeddings_Jss_Aggregate_Order_By>;
  height?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  nsfw?: InputMaybe<Order_By>;
  similarity?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  summary_points?: InputMaybe<Order_By>;
  summary_text?: InputMaybe<Order_By>;
  tags?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  transcript?: InputMaybe<Order_By>;
  transcript_timestamped?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  video_id?: InputMaybe<Order_By>;
  video_source?: InputMaybe<Order_By>;
  video_url?: InputMaybe<Order_By>;
  width?: InputMaybe<Order_By>;
};

/** primary key columns input for table: indexes */
export type Indexes_Pk_Columns_Input = {
  id: Scalars["uuid"]["input"];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Indexes_Prepend_Input = {
  summary_points?: InputMaybe<Scalars["jsonb"]["input"]>;
  tags?: InputMaybe<Scalars["jsonb"]["input"]>;
  transcript_timestamped?: InputMaybe<Scalars["jsonb"]["input"]>;
};

/** select columns of table "indexes" */
export enum Indexes_Select_Column {
  /** column name */
  Active = "active",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Description = "description",
  /** column name */
  DurationSeconds = "duration_seconds",
  /** column name */
  Height = "height",
  /** column name */
  Id = "id",
  /** column name */
  Nsfw = "nsfw",
  /** column name */
  Similarity = "similarity",
  /** column name */
  Status = "status",
  /** column name */
  SummaryPoints = "summary_points",
  /** column name */
  SummaryText = "summary_text",
  /** column name */
  Tags = "tags",
  /** column name */
  Title = "title",
  /** column name */
  Transcript = "transcript",
  /** column name */
  TranscriptTimestamped = "transcript_timestamped",
  /** column name */
  UpdatedAt = "updated_at",
  /** column name */
  VideoId = "video_id",
  /** column name */
  VideoSource = "video_source",
  /** column name */
  VideoUrl = "video_url",
  /** column name */
  Width = "width",
}

/** input type for updating data in table "indexes" */
export type Indexes_Set_Input = {
  active?: InputMaybe<Scalars["Boolean"]["input"]>;
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  duration_seconds?: InputMaybe<Scalars["numeric"]["input"]>;
  height?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  nsfw?: InputMaybe<Scalars["Boolean"]["input"]>;
  similarity?: InputMaybe<Scalars["numeric"]["input"]>;
  status?: InputMaybe<Scalars["String"]["input"]>;
  summary_points?: InputMaybe<Scalars["jsonb"]["input"]>;
  summary_text?: InputMaybe<Scalars["String"]["input"]>;
  tags?: InputMaybe<Scalars["jsonb"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  transcript?: InputMaybe<Scalars["String"]["input"]>;
  transcript_timestamped?: InputMaybe<Scalars["jsonb"]["input"]>;
  updated_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  video_id?: InputMaybe<Scalars["String"]["input"]>;
  video_source?: InputMaybe<Scalars["String"]["input"]>;
  video_url?: InputMaybe<Scalars["String"]["input"]>;
  width?: InputMaybe<Scalars["Int"]["input"]>;
};

/** aggregate stddev on columns */
export type Indexes_Stddev_Fields = {
  __typename?: "indexes_stddev_fields";
  duration_seconds?: Maybe<Scalars["Float"]["output"]>;
  height?: Maybe<Scalars["Float"]["output"]>;
  similarity?: Maybe<Scalars["Float"]["output"]>;
  width?: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate stddev_pop on columns */
export type Indexes_Stddev_Pop_Fields = {
  __typename?: "indexes_stddev_pop_fields";
  duration_seconds?: Maybe<Scalars["Float"]["output"]>;
  height?: Maybe<Scalars["Float"]["output"]>;
  similarity?: Maybe<Scalars["Float"]["output"]>;
  width?: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate stddev_samp on columns */
export type Indexes_Stddev_Samp_Fields = {
  __typename?: "indexes_stddev_samp_fields";
  duration_seconds?: Maybe<Scalars["Float"]["output"]>;
  height?: Maybe<Scalars["Float"]["output"]>;
  similarity?: Maybe<Scalars["Float"]["output"]>;
  width?: Maybe<Scalars["Float"]["output"]>;
};

/** Streaming cursor of the table "indexes" */
export type Indexes_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Indexes_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Indexes_Stream_Cursor_Value_Input = {
  active?: InputMaybe<Scalars["Boolean"]["input"]>;
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  duration_seconds?: InputMaybe<Scalars["numeric"]["input"]>;
  height?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  nsfw?: InputMaybe<Scalars["Boolean"]["input"]>;
  similarity?: InputMaybe<Scalars["numeric"]["input"]>;
  status?: InputMaybe<Scalars["String"]["input"]>;
  summary_points?: InputMaybe<Scalars["jsonb"]["input"]>;
  summary_text?: InputMaybe<Scalars["String"]["input"]>;
  tags?: InputMaybe<Scalars["jsonb"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  transcript?: InputMaybe<Scalars["String"]["input"]>;
  transcript_timestamped?: InputMaybe<Scalars["jsonb"]["input"]>;
  updated_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  video_id?: InputMaybe<Scalars["String"]["input"]>;
  video_source?: InputMaybe<Scalars["String"]["input"]>;
  video_url?: InputMaybe<Scalars["String"]["input"]>;
  width?: InputMaybe<Scalars["Int"]["input"]>;
};

/** aggregate sum on columns */
export type Indexes_Sum_Fields = {
  __typename?: "indexes_sum_fields";
  duration_seconds?: Maybe<Scalars["numeric"]["output"]>;
  height?: Maybe<Scalars["Int"]["output"]>;
  similarity?: Maybe<Scalars["numeric"]["output"]>;
  width?: Maybe<Scalars["Int"]["output"]>;
};

/** update columns of table "indexes" */
export enum Indexes_Update_Column {
  /** column name */
  Active = "active",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Description = "description",
  /** column name */
  DurationSeconds = "duration_seconds",
  /** column name */
  Height = "height",
  /** column name */
  Id = "id",
  /** column name */
  Nsfw = "nsfw",
  /** column name */
  Similarity = "similarity",
  /** column name */
  Status = "status",
  /** column name */
  SummaryPoints = "summary_points",
  /** column name */
  SummaryText = "summary_text",
  /** column name */
  Tags = "tags",
  /** column name */
  Title = "title",
  /** column name */
  Transcript = "transcript",
  /** column name */
  TranscriptTimestamped = "transcript_timestamped",
  /** column name */
  UpdatedAt = "updated_at",
  /** column name */
  VideoId = "video_id",
  /** column name */
  VideoSource = "video_source",
  /** column name */
  VideoUrl = "video_url",
  /** column name */
  Width = "width",
}

export type Indexes_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Indexes_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Indexes_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Indexes_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Indexes_Delete_Key_Input>;
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Indexes_Inc_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Indexes_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Indexes_Set_Input>;
  /** filter the rows which have to be updated */
  where: Indexes_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Indexes_Var_Pop_Fields = {
  __typename?: "indexes_var_pop_fields";
  duration_seconds?: Maybe<Scalars["Float"]["output"]>;
  height?: Maybe<Scalars["Float"]["output"]>;
  similarity?: Maybe<Scalars["Float"]["output"]>;
  width?: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate var_samp on columns */
export type Indexes_Var_Samp_Fields = {
  __typename?: "indexes_var_samp_fields";
  duration_seconds?: Maybe<Scalars["Float"]["output"]>;
  height?: Maybe<Scalars["Float"]["output"]>;
  similarity?: Maybe<Scalars["Float"]["output"]>;
  width?: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate variance on columns */
export type Indexes_Variance_Fields = {
  __typename?: "indexes_variance_fields";
  duration_seconds?: Maybe<Scalars["Float"]["output"]>;
  height?: Maybe<Scalars["Float"]["output"]>;
  similarity?: Maybe<Scalars["Float"]["output"]>;
  width?: Maybe<Scalars["Float"]["output"]>;
};

export type Jsonb_Cast_Exp = {
  String?: InputMaybe<String_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
  _cast?: InputMaybe<Jsonb_Cast_Exp>;
  /** is the column contained in the given json value */
  _contained_in?: InputMaybe<Scalars["jsonb"]["input"]>;
  /** does the column contain the given json value at the top level */
  _contains?: InputMaybe<Scalars["jsonb"]["input"]>;
  _eq?: InputMaybe<Scalars["jsonb"]["input"]>;
  _gt?: InputMaybe<Scalars["jsonb"]["input"]>;
  _gte?: InputMaybe<Scalars["jsonb"]["input"]>;
  /** does the string exist as a top-level key in the column */
  _has_key?: InputMaybe<Scalars["String"]["input"]>;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: InputMaybe<Array<Scalars["String"]["input"]>>;
  _in?: InputMaybe<Array<Scalars["jsonb"]["input"]>>;
  _is_null?: InputMaybe<Scalars["Boolean"]["input"]>;
  _lt?: InputMaybe<Scalars["jsonb"]["input"]>;
  _lte?: InputMaybe<Scalars["jsonb"]["input"]>;
  _neq?: InputMaybe<Scalars["jsonb"]["input"]>;
  _nin?: InputMaybe<Array<Scalars["jsonb"]["input"]>>;
};

export type Match_Embeddings_Args = {
  _index_id?: InputMaybe<Scalars["uuid"]["input"]>;
  match_threshold?: InputMaybe<Scalars["float8"]["input"]>;
  query_embedding?: InputMaybe<Scalars["vector"]["input"]>;
};

export type Match_Embeddings_Gte_Args = {
  _index_id?: InputMaybe<Scalars["uuid"]["input"]>;
  match_threshold?: InputMaybe<Scalars["float8"]["input"]>;
  query_embedding?: InputMaybe<Scalars["vector"]["input"]>;
};

export type Match_Indexes_Args = {
  match_threshold?: InputMaybe<Scalars["float8"]["input"]>;
  query_embedding?: InputMaybe<Scalars["vector"]["input"]>;
};

export type Match_Indexes_Gte_Args = {
  match_threshold?: InputMaybe<Scalars["float8"]["input"]>;
  query_embedding?: InputMaybe<Scalars["vector"]["input"]>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: "mutation_root";
  /** delete data from the table: "auth.users" */
  delete_auth_users?: Maybe<Auth_Users_Mutation_Response>;
  /** delete single row from the table: "auth.users" */
  delete_auth_users_by_pk?: Maybe<Auth_Users>;
  /** delete data from the table: "chats" */
  delete_chats?: Maybe<Chats_Mutation_Response>;
  /** delete single row from the table: "chats" */
  delete_chats_by_pk?: Maybe<Chats>;
  /** delete data from the table: "index_embeddings" */
  delete_index_embeddings?: Maybe<Index_Embeddings_Mutation_Response>;
  /** delete single row from the table: "index_embeddings" */
  delete_index_embeddings_by_pk?: Maybe<Index_Embeddings>;
  /** delete data from the table: "index_embeddings_gte" */
  delete_index_embeddings_gte?: Maybe<Index_Embeddings_Gte_Mutation_Response>;
  /** delete single row from the table: "index_embeddings_gte" */
  delete_index_embeddings_gte_by_pk?: Maybe<Index_Embeddings_Gte>;
  /** delete data from the table: "index_embeddings_jss" */
  delete_index_embeddings_jss?: Maybe<Index_Embeddings_Jss_Mutation_Response>;
  /** delete single row from the table: "index_embeddings_jss" */
  delete_index_embeddings_jss_by_pk?: Maybe<Index_Embeddings_Jss>;
  /** delete data from the table: "indexes" */
  delete_indexes?: Maybe<Indexes_Mutation_Response>;
  /** delete single row from the table: "indexes" */
  delete_indexes_by_pk?: Maybe<Indexes>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** insert data into the table: "auth.users" */
  insert_auth_users?: Maybe<Auth_Users_Mutation_Response>;
  /** insert a single row into the table: "auth.users" */
  insert_auth_users_one?: Maybe<Auth_Users>;
  /** insert data into the table: "chats" */
  insert_chats?: Maybe<Chats_Mutation_Response>;
  /** insert a single row into the table: "chats" */
  insert_chats_one?: Maybe<Chats>;
  /** insert data into the table: "index_embeddings" */
  insert_index_embeddings?: Maybe<Index_Embeddings_Mutation_Response>;
  /** insert data into the table: "index_embeddings_gte" */
  insert_index_embeddings_gte?: Maybe<Index_Embeddings_Gte_Mutation_Response>;
  /** insert a single row into the table: "index_embeddings_gte" */
  insert_index_embeddings_gte_one?: Maybe<Index_Embeddings_Gte>;
  /** insert data into the table: "index_embeddings_jss" */
  insert_index_embeddings_jss?: Maybe<Index_Embeddings_Jss_Mutation_Response>;
  /** insert a single row into the table: "index_embeddings_jss" */
  insert_index_embeddings_jss_one?: Maybe<Index_Embeddings_Jss>;
  /** insert a single row into the table: "index_embeddings" */
  insert_index_embeddings_one?: Maybe<Index_Embeddings>;
  /** insert data into the table: "indexes" */
  insert_indexes?: Maybe<Indexes_Mutation_Response>;
  /** insert a single row into the table: "indexes" */
  insert_indexes_one?: Maybe<Indexes>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** update data of the table: "auth.users" */
  update_auth_users?: Maybe<Auth_Users_Mutation_Response>;
  /** update single row of the table: "auth.users" */
  update_auth_users_by_pk?: Maybe<Auth_Users>;
  /** update multiples rows of table: "auth.users" */
  update_auth_users_many?: Maybe<Array<Maybe<Auth_Users_Mutation_Response>>>;
  /** update data of the table: "chats" */
  update_chats?: Maybe<Chats_Mutation_Response>;
  /** update single row of the table: "chats" */
  update_chats_by_pk?: Maybe<Chats>;
  /** update multiples rows of table: "chats" */
  update_chats_many?: Maybe<Array<Maybe<Chats_Mutation_Response>>>;
  /** update data of the table: "index_embeddings" */
  update_index_embeddings?: Maybe<Index_Embeddings_Mutation_Response>;
  /** update single row of the table: "index_embeddings" */
  update_index_embeddings_by_pk?: Maybe<Index_Embeddings>;
  /** update data of the table: "index_embeddings_gte" */
  update_index_embeddings_gte?: Maybe<Index_Embeddings_Gte_Mutation_Response>;
  /** update single row of the table: "index_embeddings_gte" */
  update_index_embeddings_gte_by_pk?: Maybe<Index_Embeddings_Gte>;
  /** update multiples rows of table: "index_embeddings_gte" */
  update_index_embeddings_gte_many?: Maybe<Array<Maybe<Index_Embeddings_Gte_Mutation_Response>>>;
  /** update data of the table: "index_embeddings_jss" */
  update_index_embeddings_jss?: Maybe<Index_Embeddings_Jss_Mutation_Response>;
  /** update single row of the table: "index_embeddings_jss" */
  update_index_embeddings_jss_by_pk?: Maybe<Index_Embeddings_Jss>;
  /** update multiples rows of table: "index_embeddings_jss" */
  update_index_embeddings_jss_many?: Maybe<Array<Maybe<Index_Embeddings_Jss_Mutation_Response>>>;
  /** update multiples rows of table: "index_embeddings" */
  update_index_embeddings_many?: Maybe<Array<Maybe<Index_Embeddings_Mutation_Response>>>;
  /** update data of the table: "indexes" */
  update_indexes?: Maybe<Indexes_Mutation_Response>;
  /** update single row of the table: "indexes" */
  update_indexes_by_pk?: Maybe<Indexes>;
  /** update multiples rows of table: "indexes" */
  update_indexes_many?: Maybe<Array<Maybe<Indexes_Mutation_Response>>>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
  /** update multiples rows of table: "users" */
  update_users_many?: Maybe<Array<Maybe<Users_Mutation_Response>>>;
};

/** mutation root */
export type Mutation_RootDelete_Auth_UsersArgs = {
  where: Auth_Users_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Auth_Users_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

/** mutation root */
export type Mutation_RootDelete_ChatsArgs = {
  where: Chats_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Chats_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

/** mutation root */
export type Mutation_RootDelete_Index_EmbeddingsArgs = {
  where: Index_Embeddings_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Index_Embeddings_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

/** mutation root */
export type Mutation_RootDelete_Index_Embeddings_GteArgs = {
  where: Index_Embeddings_Gte_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Index_Embeddings_Gte_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

/** mutation root */
export type Mutation_RootDelete_Index_Embeddings_JssArgs = {
  where: Index_Embeddings_Jss_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Index_Embeddings_Jss_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

/** mutation root */
export type Mutation_RootDelete_IndexesArgs = {
  where: Indexes_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Indexes_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

/** mutation root */
export type Mutation_RootInsert_Auth_UsersArgs = {
  objects: Array<Auth_Users_Insert_Input>;
  on_conflict?: InputMaybe<Auth_Users_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Auth_Users_OneArgs = {
  object: Auth_Users_Insert_Input;
  on_conflict?: InputMaybe<Auth_Users_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_ChatsArgs = {
  objects: Array<Chats_Insert_Input>;
  on_conflict?: InputMaybe<Chats_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Chats_OneArgs = {
  object: Chats_Insert_Input;
  on_conflict?: InputMaybe<Chats_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Index_EmbeddingsArgs = {
  objects: Array<Index_Embeddings_Insert_Input>;
  on_conflict?: InputMaybe<Index_Embeddings_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Index_Embeddings_GteArgs = {
  objects: Array<Index_Embeddings_Gte_Insert_Input>;
  on_conflict?: InputMaybe<Index_Embeddings_Gte_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Index_Embeddings_Gte_OneArgs = {
  object: Index_Embeddings_Gte_Insert_Input;
  on_conflict?: InputMaybe<Index_Embeddings_Gte_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Index_Embeddings_JssArgs = {
  objects: Array<Index_Embeddings_Jss_Insert_Input>;
  on_conflict?: InputMaybe<Index_Embeddings_Jss_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Index_Embeddings_Jss_OneArgs = {
  object: Index_Embeddings_Jss_Insert_Input;
  on_conflict?: InputMaybe<Index_Embeddings_Jss_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Index_Embeddings_OneArgs = {
  object: Index_Embeddings_Insert_Input;
  on_conflict?: InputMaybe<Index_Embeddings_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_IndexesArgs = {
  objects: Array<Indexes_Insert_Input>;
  on_conflict?: InputMaybe<Indexes_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Indexes_OneArgs = {
  object: Indexes_Insert_Input;
  on_conflict?: InputMaybe<Indexes_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** mutation root */
export type Mutation_RootUpdate_Auth_UsersArgs = {
  _append?: InputMaybe<Auth_Users_Append_Input>;
  _delete_at_path?: InputMaybe<Auth_Users_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Auth_Users_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Auth_Users_Delete_Key_Input>;
  _inc?: InputMaybe<Auth_Users_Inc_Input>;
  _prepend?: InputMaybe<Auth_Users_Prepend_Input>;
  _set?: InputMaybe<Auth_Users_Set_Input>;
  where: Auth_Users_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Auth_Users_By_PkArgs = {
  _append?: InputMaybe<Auth_Users_Append_Input>;
  _delete_at_path?: InputMaybe<Auth_Users_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Auth_Users_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Auth_Users_Delete_Key_Input>;
  _inc?: InputMaybe<Auth_Users_Inc_Input>;
  _prepend?: InputMaybe<Auth_Users_Prepend_Input>;
  _set?: InputMaybe<Auth_Users_Set_Input>;
  pk_columns: Auth_Users_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Auth_Users_ManyArgs = {
  updates: Array<Auth_Users_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_ChatsArgs = {
  _set?: InputMaybe<Chats_Set_Input>;
  where: Chats_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Chats_By_PkArgs = {
  _set?: InputMaybe<Chats_Set_Input>;
  pk_columns: Chats_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Chats_ManyArgs = {
  updates: Array<Chats_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_Index_EmbeddingsArgs = {
  _inc?: InputMaybe<Index_Embeddings_Inc_Input>;
  _set?: InputMaybe<Index_Embeddings_Set_Input>;
  where: Index_Embeddings_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Index_Embeddings_By_PkArgs = {
  _inc?: InputMaybe<Index_Embeddings_Inc_Input>;
  _set?: InputMaybe<Index_Embeddings_Set_Input>;
  pk_columns: Index_Embeddings_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Index_Embeddings_GteArgs = {
  _inc?: InputMaybe<Index_Embeddings_Gte_Inc_Input>;
  _set?: InputMaybe<Index_Embeddings_Gte_Set_Input>;
  where: Index_Embeddings_Gte_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Index_Embeddings_Gte_By_PkArgs = {
  _inc?: InputMaybe<Index_Embeddings_Gte_Inc_Input>;
  _set?: InputMaybe<Index_Embeddings_Gte_Set_Input>;
  pk_columns: Index_Embeddings_Gte_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Index_Embeddings_Gte_ManyArgs = {
  updates: Array<Index_Embeddings_Gte_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_Index_Embeddings_JssArgs = {
  _inc?: InputMaybe<Index_Embeddings_Jss_Inc_Input>;
  _set?: InputMaybe<Index_Embeddings_Jss_Set_Input>;
  where: Index_Embeddings_Jss_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Index_Embeddings_Jss_By_PkArgs = {
  _inc?: InputMaybe<Index_Embeddings_Jss_Inc_Input>;
  _set?: InputMaybe<Index_Embeddings_Jss_Set_Input>;
  pk_columns: Index_Embeddings_Jss_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Index_Embeddings_Jss_ManyArgs = {
  updates: Array<Index_Embeddings_Jss_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_Index_Embeddings_ManyArgs = {
  updates: Array<Index_Embeddings_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_IndexesArgs = {
  _append?: InputMaybe<Indexes_Append_Input>;
  _delete_at_path?: InputMaybe<Indexes_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Indexes_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Indexes_Delete_Key_Input>;
  _inc?: InputMaybe<Indexes_Inc_Input>;
  _prepend?: InputMaybe<Indexes_Prepend_Input>;
  _set?: InputMaybe<Indexes_Set_Input>;
  where: Indexes_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Indexes_By_PkArgs = {
  _append?: InputMaybe<Indexes_Append_Input>;
  _delete_at_path?: InputMaybe<Indexes_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Indexes_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Indexes_Delete_Key_Input>;
  _inc?: InputMaybe<Indexes_Inc_Input>;
  _prepend?: InputMaybe<Indexes_Prepend_Input>;
  _set?: InputMaybe<Indexes_Set_Input>;
  pk_columns: Indexes_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Indexes_ManyArgs = {
  updates: Array<Indexes_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _set?: InputMaybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _set?: InputMaybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Users_ManyArgs = {
  updates: Array<Users_Updates>;
};

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: InputMaybe<Scalars["numeric"]["input"]>;
  _gt?: InputMaybe<Scalars["numeric"]["input"]>;
  _gte?: InputMaybe<Scalars["numeric"]["input"]>;
  _in?: InputMaybe<Array<Scalars["numeric"]["input"]>>;
  _is_null?: InputMaybe<Scalars["Boolean"]["input"]>;
  _lt?: InputMaybe<Scalars["numeric"]["input"]>;
  _lte?: InputMaybe<Scalars["numeric"]["input"]>;
  _neq?: InputMaybe<Scalars["numeric"]["input"]>;
  _nin?: InputMaybe<Array<Scalars["numeric"]["input"]>>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = "asc",
  /** in ascending order, nulls first */
  AscNullsFirst = "asc_nulls_first",
  /** in ascending order, nulls last */
  AscNullsLast = "asc_nulls_last",
  /** in descending order, nulls first */
  Desc = "desc",
  /** in descending order, nulls first */
  DescNullsFirst = "desc_nulls_first",
  /** in descending order, nulls last */
  DescNullsLast = "desc_nulls_last",
}

export type Query_Root = {
  __typename?: "query_root";
  /** fetch data from the table: "auth.users" */
  auth_users: Array<Auth_Users>;
  /** fetch aggregated fields from the table: "auth.users" */
  auth_users_aggregate: Auth_Users_Aggregate;
  /** fetch data from the table: "auth.users" using primary key columns */
  auth_users_by_pk?: Maybe<Auth_Users>;
  /** fetch data from the table: "chats" */
  chats: Array<Chats>;
  /** fetch aggregated fields from the table: "chats" */
  chats_aggregate: Chats_Aggregate;
  /** fetch data from the table: "chats" using primary key columns */
  chats_by_pk?: Maybe<Chats>;
  /** fetch data from the table: "index_embeddings" */
  index_embeddings: Array<Index_Embeddings>;
  /** fetch aggregated fields from the table: "index_embeddings" */
  index_embeddings_aggregate: Index_Embeddings_Aggregate;
  /** fetch data from the table: "index_embeddings" using primary key columns */
  index_embeddings_by_pk?: Maybe<Index_Embeddings>;
  /** fetch data from the table: "index_embeddings_gte" */
  index_embeddings_gte: Array<Index_Embeddings_Gte>;
  /** fetch aggregated fields from the table: "index_embeddings_gte" */
  index_embeddings_gte_aggregate: Index_Embeddings_Gte_Aggregate;
  /** fetch data from the table: "index_embeddings_gte" using primary key columns */
  index_embeddings_gte_by_pk?: Maybe<Index_Embeddings_Gte>;
  /** fetch data from the table: "index_embeddings_jss" */
  index_embeddings_jss: Array<Index_Embeddings_Jss>;
  /** fetch aggregated fields from the table: "index_embeddings_jss" */
  index_embeddings_jss_aggregate: Index_Embeddings_Jss_Aggregate;
  /** fetch data from the table: "index_embeddings_jss" using primary key columns */
  index_embeddings_jss_by_pk?: Maybe<Index_Embeddings_Jss>;
  /** fetch data from the table: "indexes" */
  indexes: Array<Indexes>;
  /** fetch aggregated fields from the table: "indexes" */
  indexes_aggregate: Indexes_Aggregate;
  /** fetch data from the table: "indexes" using primary key columns */
  indexes_by_pk?: Maybe<Indexes>;
  /** execute function "match_embeddings" which returns "index_embeddings" */
  match_embeddings: Array<Index_Embeddings>;
  /** execute function "match_embeddings" and query aggregates on result of table type "index_embeddings" */
  match_embeddings_aggregate: Index_Embeddings_Aggregate;
  /** execute function "match_embeddings_gte" which returns "index_embeddings_gte" */
  match_embeddings_gte: Array<Index_Embeddings_Gte>;
  /** execute function "match_embeddings_gte" and query aggregates on result of table type "index_embeddings_gte" */
  match_embeddings_gte_aggregate: Index_Embeddings_Gte_Aggregate;
  /** execute function "match_indexes" which returns "indexes" */
  match_indexes: Array<Indexes>;
  /** execute function "match_indexes" and query aggregates on result of table type "indexes" */
  match_indexes_aggregate: Indexes_Aggregate;
  /** execute function "match_indexes_gte" which returns "indexes" */
  match_indexes_gte: Array<Indexes>;
  /** execute function "match_indexes_gte" and query aggregates on result of table type "indexes" */
  match_indexes_gte_aggregate: Indexes_Aggregate;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};

export type Query_RootAuth_UsersArgs = {
  distinct_on?: InputMaybe<Array<Auth_Users_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Auth_Users_Order_By>>;
  where?: InputMaybe<Auth_Users_Bool_Exp>;
};

export type Query_RootAuth_Users_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Auth_Users_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Auth_Users_Order_By>>;
  where?: InputMaybe<Auth_Users_Bool_Exp>;
};

export type Query_RootAuth_Users_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

export type Query_RootChatsArgs = {
  distinct_on?: InputMaybe<Array<Chats_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Chats_Order_By>>;
  where?: InputMaybe<Chats_Bool_Exp>;
};

export type Query_RootChats_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Chats_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Chats_Order_By>>;
  where?: InputMaybe<Chats_Bool_Exp>;
};

export type Query_RootChats_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

export type Query_RootIndex_EmbeddingsArgs = {
  distinct_on?: InputMaybe<Array<Index_Embeddings_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Index_Embeddings_Order_By>>;
  where?: InputMaybe<Index_Embeddings_Bool_Exp>;
};

export type Query_RootIndex_Embeddings_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Index_Embeddings_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Index_Embeddings_Order_By>>;
  where?: InputMaybe<Index_Embeddings_Bool_Exp>;
};

export type Query_RootIndex_Embeddings_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

export type Query_RootIndex_Embeddings_GteArgs = {
  distinct_on?: InputMaybe<Array<Index_Embeddings_Gte_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Index_Embeddings_Gte_Order_By>>;
  where?: InputMaybe<Index_Embeddings_Gte_Bool_Exp>;
};

export type Query_RootIndex_Embeddings_Gte_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Index_Embeddings_Gte_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Index_Embeddings_Gte_Order_By>>;
  where?: InputMaybe<Index_Embeddings_Gte_Bool_Exp>;
};

export type Query_RootIndex_Embeddings_Gte_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

export type Query_RootIndex_Embeddings_JssArgs = {
  distinct_on?: InputMaybe<Array<Index_Embeddings_Jss_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Index_Embeddings_Jss_Order_By>>;
  where?: InputMaybe<Index_Embeddings_Jss_Bool_Exp>;
};

export type Query_RootIndex_Embeddings_Jss_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Index_Embeddings_Jss_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Index_Embeddings_Jss_Order_By>>;
  where?: InputMaybe<Index_Embeddings_Jss_Bool_Exp>;
};

export type Query_RootIndex_Embeddings_Jss_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

export type Query_RootIndexesArgs = {
  distinct_on?: InputMaybe<Array<Indexes_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Indexes_Order_By>>;
  where?: InputMaybe<Indexes_Bool_Exp>;
};

export type Query_RootIndexes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Indexes_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Indexes_Order_By>>;
  where?: InputMaybe<Indexes_Bool_Exp>;
};

export type Query_RootIndexes_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

export type Query_RootMatch_EmbeddingsArgs = {
  args: Match_Embeddings_Args;
  distinct_on?: InputMaybe<Array<Index_Embeddings_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Index_Embeddings_Order_By>>;
  where?: InputMaybe<Index_Embeddings_Bool_Exp>;
};

export type Query_RootMatch_Embeddings_AggregateArgs = {
  args: Match_Embeddings_Args;
  distinct_on?: InputMaybe<Array<Index_Embeddings_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Index_Embeddings_Order_By>>;
  where?: InputMaybe<Index_Embeddings_Bool_Exp>;
};

export type Query_RootMatch_Embeddings_GteArgs = {
  args: Match_Embeddings_Gte_Args;
  distinct_on?: InputMaybe<Array<Index_Embeddings_Gte_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Index_Embeddings_Gte_Order_By>>;
  where?: InputMaybe<Index_Embeddings_Gte_Bool_Exp>;
};

export type Query_RootMatch_Embeddings_Gte_AggregateArgs = {
  args: Match_Embeddings_Gte_Args;
  distinct_on?: InputMaybe<Array<Index_Embeddings_Gte_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Index_Embeddings_Gte_Order_By>>;
  where?: InputMaybe<Index_Embeddings_Gte_Bool_Exp>;
};

export type Query_RootMatch_IndexesArgs = {
  args: Match_Indexes_Args;
  distinct_on?: InputMaybe<Array<Indexes_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Indexes_Order_By>>;
  where?: InputMaybe<Indexes_Bool_Exp>;
};

export type Query_RootMatch_Indexes_AggregateArgs = {
  args: Match_Indexes_Args;
  distinct_on?: InputMaybe<Array<Indexes_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Indexes_Order_By>>;
  where?: InputMaybe<Indexes_Bool_Exp>;
};

export type Query_RootMatch_Indexes_GteArgs = {
  args: Match_Indexes_Gte_Args;
  distinct_on?: InputMaybe<Array<Indexes_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Indexes_Order_By>>;
  where?: InputMaybe<Indexes_Bool_Exp>;
};

export type Query_RootMatch_Indexes_Gte_AggregateArgs = {
  args: Match_Indexes_Gte_Args;
  distinct_on?: InputMaybe<Array<Indexes_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Indexes_Order_By>>;
  where?: InputMaybe<Indexes_Bool_Exp>;
};

export type Query_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

export type Query_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

export type Query_RootUsers_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

/** Boolean expression to compare columns of type "smallint". All fields are combined with logical 'AND'. */
export type Smallint_Comparison_Exp = {
  _eq?: InputMaybe<Scalars["smallint"]["input"]>;
  _gt?: InputMaybe<Scalars["smallint"]["input"]>;
  _gte?: InputMaybe<Scalars["smallint"]["input"]>;
  _in?: InputMaybe<Array<Scalars["smallint"]["input"]>>;
  _is_null?: InputMaybe<Scalars["Boolean"]["input"]>;
  _lt?: InputMaybe<Scalars["smallint"]["input"]>;
  _lte?: InputMaybe<Scalars["smallint"]["input"]>;
  _neq?: InputMaybe<Scalars["smallint"]["input"]>;
  _nin?: InputMaybe<Array<Scalars["smallint"]["input"]>>;
};

export type Subscription_Root = {
  __typename?: "subscription_root";
  /** fetch data from the table: "auth.users" */
  auth_users: Array<Auth_Users>;
  /** fetch aggregated fields from the table: "auth.users" */
  auth_users_aggregate: Auth_Users_Aggregate;
  /** fetch data from the table: "auth.users" using primary key columns */
  auth_users_by_pk?: Maybe<Auth_Users>;
  /** fetch data from the table in a streaming manner: "auth.users" */
  auth_users_stream: Array<Auth_Users>;
  /** fetch data from the table: "chats" */
  chats: Array<Chats>;
  /** fetch aggregated fields from the table: "chats" */
  chats_aggregate: Chats_Aggregate;
  /** fetch data from the table: "chats" using primary key columns */
  chats_by_pk?: Maybe<Chats>;
  /** fetch data from the table in a streaming manner: "chats" */
  chats_stream: Array<Chats>;
  /** fetch data from the table: "index_embeddings" */
  index_embeddings: Array<Index_Embeddings>;
  /** fetch aggregated fields from the table: "index_embeddings" */
  index_embeddings_aggregate: Index_Embeddings_Aggregate;
  /** fetch data from the table: "index_embeddings" using primary key columns */
  index_embeddings_by_pk?: Maybe<Index_Embeddings>;
  /** fetch data from the table: "index_embeddings_gte" */
  index_embeddings_gte: Array<Index_Embeddings_Gte>;
  /** fetch aggregated fields from the table: "index_embeddings_gte" */
  index_embeddings_gte_aggregate: Index_Embeddings_Gte_Aggregate;
  /** fetch data from the table: "index_embeddings_gte" using primary key columns */
  index_embeddings_gte_by_pk?: Maybe<Index_Embeddings_Gte>;
  /** fetch data from the table in a streaming manner: "index_embeddings_gte" */
  index_embeddings_gte_stream: Array<Index_Embeddings_Gte>;
  /** fetch data from the table: "index_embeddings_jss" */
  index_embeddings_jss: Array<Index_Embeddings_Jss>;
  /** fetch aggregated fields from the table: "index_embeddings_jss" */
  index_embeddings_jss_aggregate: Index_Embeddings_Jss_Aggregate;
  /** fetch data from the table: "index_embeddings_jss" using primary key columns */
  index_embeddings_jss_by_pk?: Maybe<Index_Embeddings_Jss>;
  /** fetch data from the table in a streaming manner: "index_embeddings_jss" */
  index_embeddings_jss_stream: Array<Index_Embeddings_Jss>;
  /** fetch data from the table in a streaming manner: "index_embeddings" */
  index_embeddings_stream: Array<Index_Embeddings>;
  /** fetch data from the table: "indexes" */
  indexes: Array<Indexes>;
  /** fetch aggregated fields from the table: "indexes" */
  indexes_aggregate: Indexes_Aggregate;
  /** fetch data from the table: "indexes" using primary key columns */
  indexes_by_pk?: Maybe<Indexes>;
  /** fetch data from the table in a streaming manner: "indexes" */
  indexes_stream: Array<Indexes>;
  /** execute function "match_embeddings" which returns "index_embeddings" */
  match_embeddings: Array<Index_Embeddings>;
  /** execute function "match_embeddings" and query aggregates on result of table type "index_embeddings" */
  match_embeddings_aggregate: Index_Embeddings_Aggregate;
  /** execute function "match_embeddings_gte" which returns "index_embeddings_gte" */
  match_embeddings_gte: Array<Index_Embeddings_Gte>;
  /** execute function "match_embeddings_gte" and query aggregates on result of table type "index_embeddings_gte" */
  match_embeddings_gte_aggregate: Index_Embeddings_Gte_Aggregate;
  /** execute function "match_indexes" which returns "indexes" */
  match_indexes: Array<Indexes>;
  /** execute function "match_indexes" and query aggregates on result of table type "indexes" */
  match_indexes_aggregate: Indexes_Aggregate;
  /** execute function "match_indexes_gte" which returns "indexes" */
  match_indexes_gte: Array<Indexes>;
  /** execute function "match_indexes_gte" and query aggregates on result of table type "indexes" */
  match_indexes_gte_aggregate: Indexes_Aggregate;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** fetch data from the table in a streaming manner: "users" */
  users_stream: Array<Users>;
};

export type Subscription_RootAuth_UsersArgs = {
  distinct_on?: InputMaybe<Array<Auth_Users_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Auth_Users_Order_By>>;
  where?: InputMaybe<Auth_Users_Bool_Exp>;
};

export type Subscription_RootAuth_Users_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Auth_Users_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Auth_Users_Order_By>>;
  where?: InputMaybe<Auth_Users_Bool_Exp>;
};

export type Subscription_RootAuth_Users_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

export type Subscription_RootAuth_Users_StreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<Auth_Users_Stream_Cursor_Input>>;
  where?: InputMaybe<Auth_Users_Bool_Exp>;
};

export type Subscription_RootChatsArgs = {
  distinct_on?: InputMaybe<Array<Chats_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Chats_Order_By>>;
  where?: InputMaybe<Chats_Bool_Exp>;
};

export type Subscription_RootChats_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Chats_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Chats_Order_By>>;
  where?: InputMaybe<Chats_Bool_Exp>;
};

export type Subscription_RootChats_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

export type Subscription_RootChats_StreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<Chats_Stream_Cursor_Input>>;
  where?: InputMaybe<Chats_Bool_Exp>;
};

export type Subscription_RootIndex_EmbeddingsArgs = {
  distinct_on?: InputMaybe<Array<Index_Embeddings_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Index_Embeddings_Order_By>>;
  where?: InputMaybe<Index_Embeddings_Bool_Exp>;
};

export type Subscription_RootIndex_Embeddings_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Index_Embeddings_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Index_Embeddings_Order_By>>;
  where?: InputMaybe<Index_Embeddings_Bool_Exp>;
};

export type Subscription_RootIndex_Embeddings_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

export type Subscription_RootIndex_Embeddings_GteArgs = {
  distinct_on?: InputMaybe<Array<Index_Embeddings_Gte_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Index_Embeddings_Gte_Order_By>>;
  where?: InputMaybe<Index_Embeddings_Gte_Bool_Exp>;
};

export type Subscription_RootIndex_Embeddings_Gte_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Index_Embeddings_Gte_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Index_Embeddings_Gte_Order_By>>;
  where?: InputMaybe<Index_Embeddings_Gte_Bool_Exp>;
};

export type Subscription_RootIndex_Embeddings_Gte_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

export type Subscription_RootIndex_Embeddings_Gte_StreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<Index_Embeddings_Gte_Stream_Cursor_Input>>;
  where?: InputMaybe<Index_Embeddings_Gte_Bool_Exp>;
};

export type Subscription_RootIndex_Embeddings_JssArgs = {
  distinct_on?: InputMaybe<Array<Index_Embeddings_Jss_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Index_Embeddings_Jss_Order_By>>;
  where?: InputMaybe<Index_Embeddings_Jss_Bool_Exp>;
};

export type Subscription_RootIndex_Embeddings_Jss_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Index_Embeddings_Jss_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Index_Embeddings_Jss_Order_By>>;
  where?: InputMaybe<Index_Embeddings_Jss_Bool_Exp>;
};

export type Subscription_RootIndex_Embeddings_Jss_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

export type Subscription_RootIndex_Embeddings_Jss_StreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<Index_Embeddings_Jss_Stream_Cursor_Input>>;
  where?: InputMaybe<Index_Embeddings_Jss_Bool_Exp>;
};

export type Subscription_RootIndex_Embeddings_StreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<Index_Embeddings_Stream_Cursor_Input>>;
  where?: InputMaybe<Index_Embeddings_Bool_Exp>;
};

export type Subscription_RootIndexesArgs = {
  distinct_on?: InputMaybe<Array<Indexes_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Indexes_Order_By>>;
  where?: InputMaybe<Indexes_Bool_Exp>;
};

export type Subscription_RootIndexes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Indexes_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Indexes_Order_By>>;
  where?: InputMaybe<Indexes_Bool_Exp>;
};

export type Subscription_RootIndexes_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

export type Subscription_RootIndexes_StreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<Indexes_Stream_Cursor_Input>>;
  where?: InputMaybe<Indexes_Bool_Exp>;
};

export type Subscription_RootMatch_EmbeddingsArgs = {
  args: Match_Embeddings_Args;
  distinct_on?: InputMaybe<Array<Index_Embeddings_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Index_Embeddings_Order_By>>;
  where?: InputMaybe<Index_Embeddings_Bool_Exp>;
};

export type Subscription_RootMatch_Embeddings_AggregateArgs = {
  args: Match_Embeddings_Args;
  distinct_on?: InputMaybe<Array<Index_Embeddings_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Index_Embeddings_Order_By>>;
  where?: InputMaybe<Index_Embeddings_Bool_Exp>;
};

export type Subscription_RootMatch_Embeddings_GteArgs = {
  args: Match_Embeddings_Gte_Args;
  distinct_on?: InputMaybe<Array<Index_Embeddings_Gte_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Index_Embeddings_Gte_Order_By>>;
  where?: InputMaybe<Index_Embeddings_Gte_Bool_Exp>;
};

export type Subscription_RootMatch_Embeddings_Gte_AggregateArgs = {
  args: Match_Embeddings_Gte_Args;
  distinct_on?: InputMaybe<Array<Index_Embeddings_Gte_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Index_Embeddings_Gte_Order_By>>;
  where?: InputMaybe<Index_Embeddings_Gte_Bool_Exp>;
};

export type Subscription_RootMatch_IndexesArgs = {
  args: Match_Indexes_Args;
  distinct_on?: InputMaybe<Array<Indexes_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Indexes_Order_By>>;
  where?: InputMaybe<Indexes_Bool_Exp>;
};

export type Subscription_RootMatch_Indexes_AggregateArgs = {
  args: Match_Indexes_Args;
  distinct_on?: InputMaybe<Array<Indexes_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Indexes_Order_By>>;
  where?: InputMaybe<Indexes_Bool_Exp>;
};

export type Subscription_RootMatch_Indexes_GteArgs = {
  args: Match_Indexes_Gte_Args;
  distinct_on?: InputMaybe<Array<Indexes_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Indexes_Order_By>>;
  where?: InputMaybe<Indexes_Bool_Exp>;
};

export type Subscription_RootMatch_Indexes_Gte_AggregateArgs = {
  args: Match_Indexes_Gte_Args;
  distinct_on?: InputMaybe<Array<Indexes_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Indexes_Order_By>>;
  where?: InputMaybe<Indexes_Bool_Exp>;
};

export type Subscription_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

export type Subscription_RootUsers_StreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<Users_Stream_Cursor_Input>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars["timestamptz"]["input"]>;
  _gt?: InputMaybe<Scalars["timestamptz"]["input"]>;
  _gte?: InputMaybe<Scalars["timestamptz"]["input"]>;
  _in?: InputMaybe<Array<Scalars["timestamptz"]["input"]>>;
  _is_null?: InputMaybe<Scalars["Boolean"]["input"]>;
  _lt?: InputMaybe<Scalars["timestamptz"]["input"]>;
  _lte?: InputMaybe<Scalars["timestamptz"]["input"]>;
  _neq?: InputMaybe<Scalars["timestamptz"]["input"]>;
  _nin?: InputMaybe<Array<Scalars["timestamptz"]["input"]>>;
};

/** columns and relationships of "users" */
export type Users = {
  __typename?: "users";
  created_at: Scalars["timestamptz"]["output"];
  email: Scalars["String"]["output"];
  id: Scalars["uuid"]["output"];
  updated_at: Scalars["timestamptz"]["output"];
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename?: "users_aggregate";
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename?: "users_aggregate_fields";
  count: Scalars["Int"]["output"];
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Users_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: InputMaybe<Array<Users_Bool_Exp>>;
  _not?: InputMaybe<Users_Bool_Exp>;
  _or?: InputMaybe<Array<Users_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint on columns "id" */
  UsersPkey = "users_pkey",
}

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  updated_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: "users_max_fields";
  created_at?: Maybe<Scalars["timestamptz"]["output"]>;
  email?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["uuid"]["output"]>;
  updated_at?: Maybe<Scalars["timestamptz"]["output"]>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: "users_min_fields";
  created_at?: Maybe<Scalars["timestamptz"]["output"]>;
  email?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["uuid"]["output"]>;
  updated_at?: Maybe<Scalars["timestamptz"]["output"]>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: "users_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** on_conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns?: Array<Users_Update_Column>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** Ordering options when selecting data from "users". */
export type Users_Order_By = {
  created_at?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: users */
export type Users_Pk_Columns_Input = {
  id: Scalars["uuid"]["input"];
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Email = "email",
  /** column name */
  Id = "id",
  /** column name */
  UpdatedAt = "updated_at",
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  updated_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
};

/** Streaming cursor of the table "users" */
export type Users_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Users_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Users_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  updated_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Email = "email",
  /** column name */
  Id = "id",
  /** column name */
  UpdatedAt = "updated_at",
}

export type Users_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Users_Set_Input>;
  /** filter the rows which have to be updated */
  where: Users_Bool_Exp;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars["uuid"]["input"]>;
  _gt?: InputMaybe<Scalars["uuid"]["input"]>;
  _gte?: InputMaybe<Scalars["uuid"]["input"]>;
  _in?: InputMaybe<Array<Scalars["uuid"]["input"]>>;
  _is_null?: InputMaybe<Scalars["Boolean"]["input"]>;
  _lt?: InputMaybe<Scalars["uuid"]["input"]>;
  _lte?: InputMaybe<Scalars["uuid"]["input"]>;
  _neq?: InputMaybe<Scalars["uuid"]["input"]>;
  _nin?: InputMaybe<Array<Scalars["uuid"]["input"]>>;
};

/** Boolean expression to compare columns of type "vector". All fields are combined with logical 'AND'. */
export type Vector_Comparison_Exp = {
  _eq?: InputMaybe<Scalars["vector"]["input"]>;
  _gt?: InputMaybe<Scalars["vector"]["input"]>;
  _gte?: InputMaybe<Scalars["vector"]["input"]>;
  _in?: InputMaybe<Array<Scalars["vector"]["input"]>>;
  _is_null?: InputMaybe<Scalars["Boolean"]["input"]>;
  _lt?: InputMaybe<Scalars["vector"]["input"]>;
  _lte?: InputMaybe<Scalars["vector"]["input"]>;
  _neq?: InputMaybe<Scalars["vector"]["input"]>;
  _nin?: InputMaybe<Array<Scalars["vector"]["input"]>>;
};

export type GetChatsQueryVariables = Exact<{
  where?: InputMaybe<Chats_Bool_Exp>;
}>;

export type GetChatsQuery = {
  __typename?: "query_root";
  chats: Array<{
    __typename?: "chats";
    active: boolean;
    created_at: any;
    id: any;
    index_id: any;
    jigsawstack_chat_session_id: any;
    updated_at: any;
    user_id: any;
  }>;
};

export type InsertChatsMutationVariables = Exact<{
  objects?: InputMaybe<Array<Chats_Insert_Input> | Chats_Insert_Input>;
}>;

export type InsertChatsMutation = {
  __typename?: "mutation_root";
  insert_chats?: { __typename?: "chats_mutation_response"; affected_rows: number; returning: Array<{ __typename?: "chats"; id: any }> } | null;
};

export type GetIndexesQueryVariables = Exact<{
  where?: InputMaybe<Indexes_Bool_Exp>;
  order_by?: InputMaybe<Array<Indexes_Order_By> | Indexes_Order_By>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
}>;

export type GetIndexesQuery = {
  __typename?: "query_root";
  indexes: Array<{
    __typename?: "indexes";
    duration_seconds: any;
    id: any;
    status: string;
    updated_at: any;
    video_id: string;
    video_source: string;
    video_url: string;
    active: boolean;
    created_at: any;
    title?: string | null;
    similarity?: any | null;
  }>;
};

export type GetIndexesFullQueryVariables = Exact<{
  where?: InputMaybe<Indexes_Bool_Exp>;
  order_by?: InputMaybe<Array<Indexes_Order_By> | Indexes_Order_By>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
}>;

export type GetIndexesFullQuery = {
  __typename?: "query_root";
  indexes: Array<{
    __typename?: "indexes";
    transcript?: string | null;
    duration_seconds: any;
    id: any;
    status: string;
    updated_at: any;
    video_id: string;
    video_source: string;
    video_url: string;
    active: boolean;
    created_at: any;
    title?: string | null;
    similarity?: any | null;
  }>;
};

export type InsertIndexMutationVariables = Exact<{
  object?: InputMaybe<Indexes_Insert_Input>;
}>;

export type InsertIndexMutation = { __typename?: "mutation_root"; insert_indexes_one?: { __typename?: "indexes"; id: any } | null };

export type InsertEmbeddingsMutationVariables = Exact<{
  objects?: InputMaybe<Array<Index_Embeddings_Insert_Input> | Index_Embeddings_Insert_Input>;
}>;

export type InsertEmbeddingsMutation = {
  __typename?: "mutation_root";
  insert_index_embeddings?: {
    __typename?: "index_embeddings_mutation_response";
    affected_rows: number;
    returning: Array<{ __typename?: "index_embeddings"; id: any }>;
  } | null;
};

export type InsertEmbeddingsGteMutationVariables = Exact<{
  objects?: InputMaybe<Array<Index_Embeddings_Gte_Insert_Input> | Index_Embeddings_Gte_Insert_Input>;
}>;

export type InsertEmbeddingsGteMutation = {
  __typename?: "mutation_root";
  insert_index_embeddings_gte?: {
    __typename?: "index_embeddings_gte_mutation_response";
    affected_rows: number;
    returning: Array<{ __typename?: "index_embeddings_gte"; id: any }>;
  } | null;
};

export type GetMatchIndexesQueryVariables = Exact<{
  query_embedding?: InputMaybe<Scalars["vector"]["input"]>;
  match_threshold?: InputMaybe<Scalars["float8"]["input"]>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
}>;

export type GetMatchIndexesQuery = {
  __typename?: "query_root";
  match_indexes_gte: Array<{
    __typename?: "indexes";
    duration_seconds: any;
    id: any;
    status: string;
    updated_at: any;
    video_id: string;
    video_source: string;
    video_url: string;
    active: boolean;
    created_at: any;
    title?: string | null;
    similarity?: any | null;
  }>;
};

export type GetMatchEmbeddingsByIndexQueryVariables = Exact<{
  _index_id?: InputMaybe<Scalars["uuid"]["input"]>;
  match_threshold?: InputMaybe<Scalars["float8"]["input"]>;
  query_embedding?: InputMaybe<Scalars["vector"]["input"]>;
  where?: InputMaybe<Index_Embeddings_Gte_Bool_Exp>;
  order_by?: InputMaybe<Array<Index_Embeddings_Gte_Order_By> | Index_Embeddings_Gte_Order_By>;
}>;

export type GetMatchEmbeddingsByIndexQuery = {
  __typename?: "query_root";
  match_embeddings_gte: Array<{
    __typename?: "index_embeddings_gte";
    id: any;
    start_time?: any | null;
    end_time?: any | null;
    duration_time?: any | null;
    similarity?: any | null;
  }>;
};

export type GetIndexSummaryQueryVariables = Exact<{
  id: Scalars["uuid"]["input"];
}>;

export type GetIndexSummaryQuery = {
  __typename?: "query_root";
  indexes_by_pk?: { __typename?: "indexes"; summary_text?: string | null; summary_points?: any | null; transcript?: string | null } | null;
};

export type UpdateIndexesMutationVariables = Exact<{
  where?: InputMaybe<Indexes_Bool_Exp>;
  _set?: InputMaybe<Indexes_Set_Input>;
}>;

export type UpdateIndexesMutation = {
  __typename?: "mutation_root";
  update_indexes?: { __typename?: "indexes_mutation_response"; affected_rows: number; returning: Array<{ __typename?: "indexes"; id: any }> } | null;
};

export type GetIndexAggregateQueryVariables = Exact<{ [key: string]: never }>;

export type GetIndexAggregateQuery = {
  __typename?: "query_root";
  indexes_aggregate: {
    __typename?: "indexes_aggregate";
    aggregate?: {
      __typename?: "indexes_aggregate_fields";
      count: number;
      sum?: { __typename?: "indexes_sum_fields"; duration_seconds?: any | null } | null;
    } | null;
  };
};

export type IndexesFragmentFragment = {
  __typename?: "indexes";
  duration_seconds: any;
  id: any;
  status: string;
  updated_at: any;
  video_id: string;
  video_source: string;
  video_url: string;
  active: boolean;
  created_at: any;
  title?: string | null;
  similarity?: any | null;
};

export type GetUsersQueryVariables = Exact<{
  where?: InputMaybe<Users_Bool_Exp>;
}>;

export type GetUsersQuery = { __typename?: "query_root"; users: Array<{ __typename?: "users"; id: any; email: string; created_at: any }> };

export type InsertUserMutationVariables = Exact<{
  object?: InputMaybe<Users_Insert_Input>;
}>;

export type InsertUserMutation = { __typename?: "mutation_root"; insert_users_one?: { __typename?: "users"; id: any } | null };

export const IndexesFragmentFragmentDoc = gql`
    fragment indexesFragment on indexes {
  duration_seconds
  id
  status
  updated_at
  video_id
  video_source
  video_url
  active
  created_at
  title
  similarity
}
    `;
export const GetChatsDocument = gql`
    query GetChats($where: chats_bool_exp = {}) {
  chats(where: $where) {
    active
    created_at
    id
    index_id
    jigsawstack_chat_session_id
    updated_at
    user_id
  }
}
    `;
export const InsertChatsDocument = gql`
    mutation InsertChats($objects: [chats_insert_input!] = []) {
  insert_chats(objects: $objects) {
    affected_rows
    returning {
      id
    }
  }
}
    `;
export const GetIndexesDocument = gql`
    query GetIndexes($where: indexes_bool_exp = {}, $order_by: [indexes_order_by!] = {}, $limit: Int) {
  indexes(where: $where, order_by: $order_by, limit: $limit) {
    ...indexesFragment
  }
}
    ${IndexesFragmentFragmentDoc}`;
export const GetIndexesFullDocument = gql`
    query GetIndexesFull($where: indexes_bool_exp = {}, $order_by: [indexes_order_by!] = {}, $limit: Int) {
  indexes(where: $where, order_by: $order_by, limit: $limit) {
    ...indexesFragment
    transcript
  }
}
    ${IndexesFragmentFragmentDoc}`;
export const InsertIndexDocument = gql`
    mutation InsertIndex($object: indexes_insert_input = {}) {
  insert_indexes_one(object: $object) {
    id
  }
}
    `;
export const InsertEmbeddingsDocument = gql`
    mutation InsertEmbeddings($objects: [index_embeddings_insert_input!] = []) {
  insert_index_embeddings(objects: $objects) {
    affected_rows
    returning {
      id
    }
  }
}
    `;
export const InsertEmbeddingsGteDocument = gql`
    mutation InsertEmbeddingsGTE($objects: [index_embeddings_gte_insert_input!] = []) {
  insert_index_embeddings_gte(objects: $objects) {
    affected_rows
    returning {
      id
    }
  }
}
    `;
export const GetMatchIndexesDocument = gql`
    query GetMatchIndexes($query_embedding: vector, $match_threshold: float8 = "0.81", $limit: Int) {
  match_indexes_gte(
    args: {match_threshold: $match_threshold, query_embedding: $query_embedding}
    limit: $limit
    distinct_on: id
    order_by: [{id: desc}, {similarity: desc}]
  ) {
    ...indexesFragment
  }
}
    ${IndexesFragmentFragmentDoc}`;
export const GetMatchEmbeddingsByIndexDocument = gql`
    query GetMatchEmbeddingsByIndex($_index_id: uuid = "", $match_threshold: float8 = 0.65, $query_embedding: vector, $where: index_embeddings_gte_bool_exp = {}, $order_by: [index_embeddings_gte_order_by!] = {}) {
  match_embeddings_gte(
    args: {_index_id: $_index_id, match_threshold: $match_threshold, query_embedding: $query_embedding}
    where: $where
    order_by: $order_by
  ) {
    id
    start_time
    end_time
    duration_time
    similarity
  }
}
    `;
export const GetIndexSummaryDocument = gql`
    query GetIndexSummary($id: uuid!) {
  indexes_by_pk(id: $id) {
    summary_text
    summary_points
    transcript
  }
}
    `;
export const UpdateIndexesDocument = gql`
    mutation UpdateIndexes($where: indexes_bool_exp = {}, $_set: indexes_set_input = {}) {
  update_indexes(where: $where, _set: $_set) {
    affected_rows
    returning {
      id
    }
  }
}
    `;
export const GetIndexAggregateDocument = gql`
    query GetIndexAggregate {
  indexes_aggregate {
    aggregate {
      count(columns: id)
      sum {
        duration_seconds
      }
    }
  }
}
    `;
export const GetUsersDocument = gql`
    query GetUsers($where: users_bool_exp = {}) {
  users(where: $where) {
    id
    email
    created_at
  }
}
    `;
export const InsertUserDocument = gql`
    mutation InsertUser($object: users_insert_input = {}) {
  insert_users_one(object: $object) {
    id
  }
}
    `;
