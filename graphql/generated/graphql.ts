import { gql } from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  float8: { input: any; output: any; }
  jsonb: { input: any; output: any; }
  numeric: { input: any; output: any; }
  timestamptz: { input: any; output: any; }
  uuid: { input: any; output: any; }
  vector: { input: any; output: any; }
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']['input']>;
  _gt?: InputMaybe<Scalars['Boolean']['input']>;
  _gte?: InputMaybe<Scalars['Boolean']['input']>;
  _in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Boolean']['input']>;
  _lte?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Scalars['Boolean']['input']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']['input']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']['input']>;
  _gt?: InputMaybe<Scalars['Int']['input']>;
  _gte?: InputMaybe<Scalars['Int']['input']>;
  _in?: InputMaybe<Array<Scalars['Int']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Int']['input']>;
  _lte?: InputMaybe<Scalars['Int']['input']>;
  _neq?: InputMaybe<Scalars['Int']['input']>;
  _nin?: InputMaybe<Array<Scalars['Int']['input']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']['input']>;
  _gt?: InputMaybe<Scalars['String']['input']>;
  _gte?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']['input']>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']['input']>;
  _lt?: InputMaybe<Scalars['String']['input']>;
  _lte?: InputMaybe<Scalars['String']['input']>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']['input']>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** columns and relationships of "index_embeddings" */
export type Index_Embeddings = {
  __typename?: 'index_embeddings';
  content: Scalars['String']['output'];
  created_at: Scalars['timestamptz']['output'];
  embedding: Scalars['vector']['output'];
  id: Scalars['uuid']['output'];
  /** An object relationship */
  index: Indexes;
  index_id: Scalars['uuid']['output'];
  updated_at: Scalars['timestamptz']['output'];
};

/** aggregated selection of "index_embeddings" */
export type Index_Embeddings_Aggregate = {
  __typename?: 'index_embeddings_aggregate';
  aggregate?: Maybe<Index_Embeddings_Aggregate_Fields>;
  nodes: Array<Index_Embeddings>;
};

export type Index_Embeddings_Aggregate_Bool_Exp = {
  count?: InputMaybe<Index_Embeddings_Aggregate_Bool_Exp_Count>;
};

export type Index_Embeddings_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Index_Embeddings_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Index_Embeddings_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "index_embeddings" */
export type Index_Embeddings_Aggregate_Fields = {
  __typename?: 'index_embeddings_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Index_Embeddings_Max_Fields>;
  min?: Maybe<Index_Embeddings_Min_Fields>;
};


/** aggregate fields of "index_embeddings" */
export type Index_Embeddings_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Index_Embeddings_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "index_embeddings" */
export type Index_Embeddings_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Index_Embeddings_Max_Order_By>;
  min?: InputMaybe<Index_Embeddings_Min_Order_By>;
};

/** input type for inserting array relation for remote table "index_embeddings" */
export type Index_Embeddings_Arr_Rel_Insert_Input = {
  data: Array<Index_Embeddings_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Index_Embeddings_On_Conflict>;
};

/** Boolean expression to filter rows from the table "index_embeddings". All fields are combined with a logical 'AND'. */
export type Index_Embeddings_Bool_Exp = {
  _and?: InputMaybe<Array<Index_Embeddings_Bool_Exp>>;
  _not?: InputMaybe<Index_Embeddings_Bool_Exp>;
  _or?: InputMaybe<Array<Index_Embeddings_Bool_Exp>>;
  content?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  embedding?: InputMaybe<Vector_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  index?: InputMaybe<Indexes_Bool_Exp>;
  index_id?: InputMaybe<Uuid_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "index_embeddings" */
export enum Index_Embeddings_Constraint {
  /** unique or primary key constraint on columns "id" */
  IndexEmbeddingsPkey = 'index_embeddings_pkey'
}

/** input type for inserting data into table "index_embeddings" */
export type Index_Embeddings_Insert_Input = {
  content?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  embedding?: InputMaybe<Scalars['vector']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  index?: InputMaybe<Indexes_Obj_Rel_Insert_Input>;
  index_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Index_Embeddings_Max_Fields = {
  __typename?: 'index_embeddings_max_fields';
  content?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  index_id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "index_embeddings" */
export type Index_Embeddings_Max_Order_By = {
  content?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  index_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Index_Embeddings_Min_Fields = {
  __typename?: 'index_embeddings_min_fields';
  content?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  index_id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "index_embeddings" */
export type Index_Embeddings_Min_Order_By = {
  content?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  index_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "index_embeddings" */
export type Index_Embeddings_Mutation_Response = {
  __typename?: 'index_embeddings_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
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
  embedding?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  index?: InputMaybe<Indexes_Order_By>;
  index_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: index_embeddings */
export type Index_Embeddings_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "index_embeddings" */
export enum Index_Embeddings_Select_Column {
  /** column name */
  Content = 'content',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Embedding = 'embedding',
  /** column name */
  Id = 'id',
  /** column name */
  IndexId = 'index_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "index_embeddings" */
export type Index_Embeddings_Set_Input = {
  content?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  embedding?: InputMaybe<Scalars['vector']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  index_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
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
  content?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  embedding?: InputMaybe<Scalars['vector']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  index_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** update columns of table "index_embeddings" */
export enum Index_Embeddings_Update_Column {
  /** column name */
  Content = 'content',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Embedding = 'embedding',
  /** column name */
  Id = 'id',
  /** column name */
  IndexId = 'index_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Index_Embeddings_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Index_Embeddings_Set_Input>;
  /** filter the rows which have to be updated */
  where: Index_Embeddings_Bool_Exp;
};

/** columns and relationships of "indexes" */
export type Indexes = {
  __typename?: 'indexes';
  active: Scalars['Boolean']['output'];
  created_at: Scalars['timestamptz']['output'];
  description?: Maybe<Scalars['String']['output']>;
  duration_seconds: Scalars['numeric']['output'];
  /** An array relationship */
  embeddings: Array<Index_Embeddings>;
  /** An aggregate relationship */
  embeddings_aggregate: Index_Embeddings_Aggregate;
  height?: Maybe<Scalars['Int']['output']>;
  id: Scalars['uuid']['output'];
  nsfw: Scalars['Boolean']['output'];
  similarity?: Maybe<Scalars['numeric']['output']>;
  status: Scalars['String']['output'];
  tags: Scalars['jsonb']['output'];
  title?: Maybe<Scalars['String']['output']>;
  transcript?: Maybe<Scalars['String']['output']>;
  transcript_timestamped?: Maybe<Scalars['jsonb']['output']>;
  updated_at: Scalars['timestamptz']['output'];
  video_id: Scalars['String']['output'];
  video_source: Scalars['String']['output'];
  video_url: Scalars['String']['output'];
  width?: Maybe<Scalars['Int']['output']>;
};


/** columns and relationships of "indexes" */
export type IndexesEmbeddingsArgs = {
  distinct_on?: InputMaybe<Array<Index_Embeddings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Index_Embeddings_Order_By>>;
  where?: InputMaybe<Index_Embeddings_Bool_Exp>;
};


/** columns and relationships of "indexes" */
export type IndexesEmbeddings_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Index_Embeddings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Index_Embeddings_Order_By>>;
  where?: InputMaybe<Index_Embeddings_Bool_Exp>;
};


/** columns and relationships of "indexes" */
export type IndexesTagsArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** columns and relationships of "indexes" */
export type IndexesTranscript_TimestampedArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "indexes" */
export type Indexes_Aggregate = {
  __typename?: 'indexes_aggregate';
  aggregate?: Maybe<Indexes_Aggregate_Fields>;
  nodes: Array<Indexes>;
};

/** aggregate fields of "indexes" */
export type Indexes_Aggregate_Fields = {
  __typename?: 'indexes_aggregate_fields';
  avg?: Maybe<Indexes_Avg_Fields>;
  count: Scalars['Int']['output'];
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
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Indexes_Append_Input = {
  tags?: InputMaybe<Scalars['jsonb']['input']>;
  transcript_timestamped?: InputMaybe<Scalars['jsonb']['input']>;
};

/** aggregate avg on columns */
export type Indexes_Avg_Fields = {
  __typename?: 'indexes_avg_fields';
  duration_seconds?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
  similarity?: Maybe<Scalars['Float']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
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
  height?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  nsfw?: InputMaybe<Boolean_Comparison_Exp>;
  similarity?: InputMaybe<Numeric_Comparison_Exp>;
  status?: InputMaybe<String_Comparison_Exp>;
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
  IndexesPkey = 'indexes_pkey',
  /** unique or primary key constraint on columns "video_id" */
  IndexesVideoIdKey = 'indexes_video_id_key'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Indexes_Delete_At_Path_Input = {
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  transcript_timestamped?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Indexes_Delete_Elem_Input = {
  tags?: InputMaybe<Scalars['Int']['input']>;
  transcript_timestamped?: InputMaybe<Scalars['Int']['input']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Indexes_Delete_Key_Input = {
  tags?: InputMaybe<Scalars['String']['input']>;
  transcript_timestamped?: InputMaybe<Scalars['String']['input']>;
};

/** input type for incrementing numeric columns in table "indexes" */
export type Indexes_Inc_Input = {
  duration_seconds?: InputMaybe<Scalars['numeric']['input']>;
  height?: InputMaybe<Scalars['Int']['input']>;
  similarity?: InputMaybe<Scalars['numeric']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "indexes" */
export type Indexes_Insert_Input = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  duration_seconds?: InputMaybe<Scalars['numeric']['input']>;
  embeddings?: InputMaybe<Index_Embeddings_Arr_Rel_Insert_Input>;
  height?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  nsfw?: InputMaybe<Scalars['Boolean']['input']>;
  similarity?: InputMaybe<Scalars['numeric']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Scalars['jsonb']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  transcript?: InputMaybe<Scalars['String']['input']>;
  transcript_timestamped?: InputMaybe<Scalars['jsonb']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  video_id?: InputMaybe<Scalars['String']['input']>;
  video_source?: InputMaybe<Scalars['String']['input']>;
  video_url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate max on columns */
export type Indexes_Max_Fields = {
  __typename?: 'indexes_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  duration_seconds?: Maybe<Scalars['numeric']['output']>;
  height?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  similarity?: Maybe<Scalars['numeric']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  transcript?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  video_id?: Maybe<Scalars['String']['output']>;
  video_source?: Maybe<Scalars['String']['output']>;
  video_url?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Int']['output']>;
};

/** aggregate min on columns */
export type Indexes_Min_Fields = {
  __typename?: 'indexes_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  duration_seconds?: Maybe<Scalars['numeric']['output']>;
  height?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  similarity?: Maybe<Scalars['numeric']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  transcript?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  video_id?: Maybe<Scalars['String']['output']>;
  video_source?: Maybe<Scalars['String']['output']>;
  video_url?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Int']['output']>;
};

/** response of any mutation on the table "indexes" */
export type Indexes_Mutation_Response = {
  __typename?: 'indexes_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
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
  height?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  nsfw?: InputMaybe<Order_By>;
  similarity?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
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
  id: Scalars['uuid']['input'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Indexes_Prepend_Input = {
  tags?: InputMaybe<Scalars['jsonb']['input']>;
  transcript_timestamped?: InputMaybe<Scalars['jsonb']['input']>;
};

/** select columns of table "indexes" */
export enum Indexes_Select_Column {
  /** column name */
  Active = 'active',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  DurationSeconds = 'duration_seconds',
  /** column name */
  Height = 'height',
  /** column name */
  Id = 'id',
  /** column name */
  Nsfw = 'nsfw',
  /** column name */
  Similarity = 'similarity',
  /** column name */
  Status = 'status',
  /** column name */
  Tags = 'tags',
  /** column name */
  Title = 'title',
  /** column name */
  Transcript = 'transcript',
  /** column name */
  TranscriptTimestamped = 'transcript_timestamped',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  VideoId = 'video_id',
  /** column name */
  VideoSource = 'video_source',
  /** column name */
  VideoUrl = 'video_url',
  /** column name */
  Width = 'width'
}

/** input type for updating data in table "indexes" */
export type Indexes_Set_Input = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  duration_seconds?: InputMaybe<Scalars['numeric']['input']>;
  height?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  nsfw?: InputMaybe<Scalars['Boolean']['input']>;
  similarity?: InputMaybe<Scalars['numeric']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Scalars['jsonb']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  transcript?: InputMaybe<Scalars['String']['input']>;
  transcript_timestamped?: InputMaybe<Scalars['jsonb']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  video_id?: InputMaybe<Scalars['String']['input']>;
  video_source?: InputMaybe<Scalars['String']['input']>;
  video_url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate stddev on columns */
export type Indexes_Stddev_Fields = {
  __typename?: 'indexes_stddev_fields';
  duration_seconds?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
  similarity?: Maybe<Scalars['Float']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Indexes_Stddev_Pop_Fields = {
  __typename?: 'indexes_stddev_pop_fields';
  duration_seconds?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
  similarity?: Maybe<Scalars['Float']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Indexes_Stddev_Samp_Fields = {
  __typename?: 'indexes_stddev_samp_fields';
  duration_seconds?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
  similarity?: Maybe<Scalars['Float']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
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
  active?: InputMaybe<Scalars['Boolean']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  duration_seconds?: InputMaybe<Scalars['numeric']['input']>;
  height?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  nsfw?: InputMaybe<Scalars['Boolean']['input']>;
  similarity?: InputMaybe<Scalars['numeric']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Scalars['jsonb']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  transcript?: InputMaybe<Scalars['String']['input']>;
  transcript_timestamped?: InputMaybe<Scalars['jsonb']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  video_id?: InputMaybe<Scalars['String']['input']>;
  video_source?: InputMaybe<Scalars['String']['input']>;
  video_url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type Indexes_Sum_Fields = {
  __typename?: 'indexes_sum_fields';
  duration_seconds?: Maybe<Scalars['numeric']['output']>;
  height?: Maybe<Scalars['Int']['output']>;
  similarity?: Maybe<Scalars['numeric']['output']>;
  width?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "indexes" */
export enum Indexes_Update_Column {
  /** column name */
  Active = 'active',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  DurationSeconds = 'duration_seconds',
  /** column name */
  Height = 'height',
  /** column name */
  Id = 'id',
  /** column name */
  Nsfw = 'nsfw',
  /** column name */
  Similarity = 'similarity',
  /** column name */
  Status = 'status',
  /** column name */
  Tags = 'tags',
  /** column name */
  Title = 'title',
  /** column name */
  Transcript = 'transcript',
  /** column name */
  TranscriptTimestamped = 'transcript_timestamped',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  VideoId = 'video_id',
  /** column name */
  VideoSource = 'video_source',
  /** column name */
  VideoUrl = 'video_url',
  /** column name */
  Width = 'width'
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
  __typename?: 'indexes_var_pop_fields';
  duration_seconds?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
  similarity?: Maybe<Scalars['Float']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Indexes_Var_Samp_Fields = {
  __typename?: 'indexes_var_samp_fields';
  duration_seconds?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
  similarity?: Maybe<Scalars['Float']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Indexes_Variance_Fields = {
  __typename?: 'indexes_variance_fields';
  duration_seconds?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
  similarity?: Maybe<Scalars['Float']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};

export type Jsonb_Cast_Exp = {
  String?: InputMaybe<String_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
  _cast?: InputMaybe<Jsonb_Cast_Exp>;
  /** is the column contained in the given json value */
  _contained_in?: InputMaybe<Scalars['jsonb']['input']>;
  /** does the column contain the given json value at the top level */
  _contains?: InputMaybe<Scalars['jsonb']['input']>;
  _eq?: InputMaybe<Scalars['jsonb']['input']>;
  _gt?: InputMaybe<Scalars['jsonb']['input']>;
  _gte?: InputMaybe<Scalars['jsonb']['input']>;
  /** does the string exist as a top-level key in the column */
  _has_key?: InputMaybe<Scalars['String']['input']>;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: InputMaybe<Array<Scalars['String']['input']>>;
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: InputMaybe<Array<Scalars['String']['input']>>;
  _in?: InputMaybe<Array<Scalars['jsonb']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['jsonb']['input']>;
  _lte?: InputMaybe<Scalars['jsonb']['input']>;
  _neq?: InputMaybe<Scalars['jsonb']['input']>;
  _nin?: InputMaybe<Array<Scalars['jsonb']['input']>>;
};

export type Match_Embeddings_Args = {
  index_id?: InputMaybe<Scalars['uuid']['input']>;
  match_threshold?: InputMaybe<Scalars['float8']['input']>;
  query_embedding?: InputMaybe<Scalars['vector']['input']>;
};

export type Match_Indexes_Args = {
  match_count?: InputMaybe<Scalars['Int']['input']>;
  match_threshold?: InputMaybe<Scalars['float8']['input']>;
  query_embedding?: InputMaybe<Scalars['vector']['input']>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "index_embeddings" */
  delete_index_embeddings?: Maybe<Index_Embeddings_Mutation_Response>;
  /** delete single row from the table: "index_embeddings" */
  delete_index_embeddings_by_pk?: Maybe<Index_Embeddings>;
  /** delete data from the table: "indexes" */
  delete_indexes?: Maybe<Indexes_Mutation_Response>;
  /** delete single row from the table: "indexes" */
  delete_indexes_by_pk?: Maybe<Indexes>;
  /** insert data into the table: "index_embeddings" */
  insert_index_embeddings?: Maybe<Index_Embeddings_Mutation_Response>;
  /** insert a single row into the table: "index_embeddings" */
  insert_index_embeddings_one?: Maybe<Index_Embeddings>;
  /** insert data into the table: "indexes" */
  insert_indexes?: Maybe<Indexes_Mutation_Response>;
  /** insert a single row into the table: "indexes" */
  insert_indexes_one?: Maybe<Indexes>;
  /** update data of the table: "index_embeddings" */
  update_index_embeddings?: Maybe<Index_Embeddings_Mutation_Response>;
  /** update single row of the table: "index_embeddings" */
  update_index_embeddings_by_pk?: Maybe<Index_Embeddings>;
  /** update multiples rows of table: "index_embeddings" */
  update_index_embeddings_many?: Maybe<Array<Maybe<Index_Embeddings_Mutation_Response>>>;
  /** update data of the table: "indexes" */
  update_indexes?: Maybe<Indexes_Mutation_Response>;
  /** update single row of the table: "indexes" */
  update_indexes_by_pk?: Maybe<Indexes>;
  /** update multiples rows of table: "indexes" */
  update_indexes_many?: Maybe<Array<Maybe<Indexes_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_Index_EmbeddingsArgs = {
  where: Index_Embeddings_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Index_Embeddings_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_IndexesArgs = {
  where: Indexes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Indexes_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootInsert_Index_EmbeddingsArgs = {
  objects: Array<Index_Embeddings_Insert_Input>;
  on_conflict?: InputMaybe<Index_Embeddings_On_Conflict>;
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
export type Mutation_RootUpdate_Index_EmbeddingsArgs = {
  _set?: InputMaybe<Index_Embeddings_Set_Input>;
  where: Index_Embeddings_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Index_Embeddings_By_PkArgs = {
  _set?: InputMaybe<Index_Embeddings_Set_Input>;
  pk_columns: Index_Embeddings_Pk_Columns_Input;
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

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['numeric']['input']>;
  _gt?: InputMaybe<Scalars['numeric']['input']>;
  _gte?: InputMaybe<Scalars['numeric']['input']>;
  _in?: InputMaybe<Array<Scalars['numeric']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['numeric']['input']>;
  _lte?: InputMaybe<Scalars['numeric']['input']>;
  _neq?: InputMaybe<Scalars['numeric']['input']>;
  _nin?: InputMaybe<Array<Scalars['numeric']['input']>>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "index_embeddings" */
  index_embeddings: Array<Index_Embeddings>;
  /** fetch aggregated fields from the table: "index_embeddings" */
  index_embeddings_aggregate: Index_Embeddings_Aggregate;
  /** fetch data from the table: "index_embeddings" using primary key columns */
  index_embeddings_by_pk?: Maybe<Index_Embeddings>;
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
  /** execute function "match_indexes" which returns "indexes" */
  match_indexes: Array<Indexes>;
  /** execute function "match_indexes" and query aggregates on result of table type "indexes" */
  match_indexes_aggregate: Indexes_Aggregate;
};


export type Query_RootIndex_EmbeddingsArgs = {
  distinct_on?: InputMaybe<Array<Index_Embeddings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Index_Embeddings_Order_By>>;
  where?: InputMaybe<Index_Embeddings_Bool_Exp>;
};


export type Query_RootIndex_Embeddings_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Index_Embeddings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Index_Embeddings_Order_By>>;
  where?: InputMaybe<Index_Embeddings_Bool_Exp>;
};


export type Query_RootIndex_Embeddings_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootIndexesArgs = {
  distinct_on?: InputMaybe<Array<Indexes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Indexes_Order_By>>;
  where?: InputMaybe<Indexes_Bool_Exp>;
};


export type Query_RootIndexes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Indexes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Indexes_Order_By>>;
  where?: InputMaybe<Indexes_Bool_Exp>;
};


export type Query_RootIndexes_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootMatch_EmbeddingsArgs = {
  args: Match_Embeddings_Args;
  distinct_on?: InputMaybe<Array<Index_Embeddings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Index_Embeddings_Order_By>>;
  where?: InputMaybe<Index_Embeddings_Bool_Exp>;
};


export type Query_RootMatch_Embeddings_AggregateArgs = {
  args: Match_Embeddings_Args;
  distinct_on?: InputMaybe<Array<Index_Embeddings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Index_Embeddings_Order_By>>;
  where?: InputMaybe<Index_Embeddings_Bool_Exp>;
};


export type Query_RootMatch_IndexesArgs = {
  args: Match_Indexes_Args;
  distinct_on?: InputMaybe<Array<Indexes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Indexes_Order_By>>;
  where?: InputMaybe<Indexes_Bool_Exp>;
};


export type Query_RootMatch_Indexes_AggregateArgs = {
  args: Match_Indexes_Args;
  distinct_on?: InputMaybe<Array<Indexes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Indexes_Order_By>>;
  where?: InputMaybe<Indexes_Bool_Exp>;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "index_embeddings" */
  index_embeddings: Array<Index_Embeddings>;
  /** fetch aggregated fields from the table: "index_embeddings" */
  index_embeddings_aggregate: Index_Embeddings_Aggregate;
  /** fetch data from the table: "index_embeddings" using primary key columns */
  index_embeddings_by_pk?: Maybe<Index_Embeddings>;
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
  /** execute function "match_indexes" which returns "indexes" */
  match_indexes: Array<Indexes>;
  /** execute function "match_indexes" and query aggregates on result of table type "indexes" */
  match_indexes_aggregate: Indexes_Aggregate;
};


export type Subscription_RootIndex_EmbeddingsArgs = {
  distinct_on?: InputMaybe<Array<Index_Embeddings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Index_Embeddings_Order_By>>;
  where?: InputMaybe<Index_Embeddings_Bool_Exp>;
};


export type Subscription_RootIndex_Embeddings_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Index_Embeddings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Index_Embeddings_Order_By>>;
  where?: InputMaybe<Index_Embeddings_Bool_Exp>;
};


export type Subscription_RootIndex_Embeddings_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootIndex_Embeddings_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Index_Embeddings_Stream_Cursor_Input>>;
  where?: InputMaybe<Index_Embeddings_Bool_Exp>;
};


export type Subscription_RootIndexesArgs = {
  distinct_on?: InputMaybe<Array<Indexes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Indexes_Order_By>>;
  where?: InputMaybe<Indexes_Bool_Exp>;
};


export type Subscription_RootIndexes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Indexes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Indexes_Order_By>>;
  where?: InputMaybe<Indexes_Bool_Exp>;
};


export type Subscription_RootIndexes_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootIndexes_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Indexes_Stream_Cursor_Input>>;
  where?: InputMaybe<Indexes_Bool_Exp>;
};


export type Subscription_RootMatch_EmbeddingsArgs = {
  args: Match_Embeddings_Args;
  distinct_on?: InputMaybe<Array<Index_Embeddings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Index_Embeddings_Order_By>>;
  where?: InputMaybe<Index_Embeddings_Bool_Exp>;
};


export type Subscription_RootMatch_Embeddings_AggregateArgs = {
  args: Match_Embeddings_Args;
  distinct_on?: InputMaybe<Array<Index_Embeddings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Index_Embeddings_Order_By>>;
  where?: InputMaybe<Index_Embeddings_Bool_Exp>;
};


export type Subscription_RootMatch_IndexesArgs = {
  args: Match_Indexes_Args;
  distinct_on?: InputMaybe<Array<Indexes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Indexes_Order_By>>;
  where?: InputMaybe<Indexes_Bool_Exp>;
};


export type Subscription_RootMatch_Indexes_AggregateArgs = {
  args: Match_Indexes_Args;
  distinct_on?: InputMaybe<Array<Indexes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Indexes_Order_By>>;
  where?: InputMaybe<Indexes_Bool_Exp>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']['input']>;
  _gt?: InputMaybe<Scalars['timestamptz']['input']>;
  _gte?: InputMaybe<Scalars['timestamptz']['input']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['timestamptz']['input']>;
  _lte?: InputMaybe<Scalars['timestamptz']['input']>;
  _neq?: InputMaybe<Scalars['timestamptz']['input']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']['input']>;
  _gt?: InputMaybe<Scalars['uuid']['input']>;
  _gte?: InputMaybe<Scalars['uuid']['input']>;
  _in?: InputMaybe<Array<Scalars['uuid']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['uuid']['input']>;
  _lte?: InputMaybe<Scalars['uuid']['input']>;
  _neq?: InputMaybe<Scalars['uuid']['input']>;
  _nin?: InputMaybe<Array<Scalars['uuid']['input']>>;
};

/** Boolean expression to compare columns of type "vector". All fields are combined with logical 'AND'. */
export type Vector_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['vector']['input']>;
  _gt?: InputMaybe<Scalars['vector']['input']>;
  _gte?: InputMaybe<Scalars['vector']['input']>;
  _in?: InputMaybe<Array<Scalars['vector']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['vector']['input']>;
  _lte?: InputMaybe<Scalars['vector']['input']>;
  _neq?: InputMaybe<Scalars['vector']['input']>;
  _nin?: InputMaybe<Array<Scalars['vector']['input']>>;
};

export type GetIndexesQueryVariables = Exact<{
  where?: InputMaybe<Indexes_Bool_Exp>;
  order_by?: InputMaybe<Array<Indexes_Order_By> | Indexes_Order_By>;
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;


export type GetIndexesQuery = { __typename?: 'query_root', indexes: Array<{ __typename?: 'indexes', duration_seconds: any, id: any, nsfw: boolean, status: string, tags: any, transcript?: string | null, transcript_timestamped?: any | null, updated_at: any, video_id: string, video_source: string, video_url: string, description?: string | null, active: boolean, created_at: any, title?: string | null, width?: number | null, height?: number | null }> };

export type InsertIndexMutationVariables = Exact<{
  object?: InputMaybe<Indexes_Insert_Input>;
}>;


export type InsertIndexMutation = { __typename?: 'mutation_root', insert_indexes_one?: { __typename?: 'indexes', id: any } | null };


export const GetIndexesDocument = gql`
    query GetIndexes($where: indexes_bool_exp = {}, $order_by: [indexes_order_by!] = {}, $limit: Int) {
  indexes(where: $where, order_by: $order_by, limit: $limit) {
    duration_seconds
    id
    nsfw
    status
    tags
    transcript
    transcript_timestamped
    updated_at
    video_id
    video_source
    video_url
    description
    active
    created_at
    title
    width
    height
  }
}
    `;
export const InsertIndexDocument = gql`
    mutation InsertIndex($object: indexes_insert_input = {}) {
  insert_indexes_one(object: $object) {
    id
  }
}
    `;