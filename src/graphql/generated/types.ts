export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Time: any;
};

export type CreateTodoInput = {
  todo: Scalars['String'];
  userId: Scalars['ID'];
};

export type CreateUserInput = {
  name: Scalars['String'];
};

export type DeleteTodoInput = {
  id: Scalars['ID'];
};

export type DeleteUserInput = {
  id: Scalars['ID'];
};

export type Mutation = {
  createTodo: Todo;
  createUser: User;
  deleteTodo: Todo;
  deleteUser: User;
  updateTodo: Todo;
  updateUser: User;
};


export type MutationCreateTodoArgs = {
  input?: InputMaybe<CreateTodoInput>;
};


export type MutationCreateUserArgs = {
  input?: InputMaybe<CreateUserInput>;
};


export type MutationDeleteTodoArgs = {
  input?: InputMaybe<DeleteTodoInput>;
};


export type MutationDeleteUserArgs = {
  input?: InputMaybe<DeleteUserInput>;
};


export type MutationUpdateTodoArgs = {
  input?: InputMaybe<UpdateTodoInput>;
};


export type MutationUpdateUserArgs = {
  input?: InputMaybe<UpdateUserInput>;
};

export type Query = {
  allTodos: Array<Maybe<Todo>>;
  allUsers: Array<Maybe<User>>;
  todo: Todo;
  todos: Array<Maybe<Todo>>;
  user: User;
  users: Array<Maybe<User>>;
};


export type QueryTodoArgs = {
  id: Scalars['ID'];
};


export type QueryTodosArgs = {
  filter?: InputMaybe<TodoFilter>;
};


export type QueryUserArgs = {
  id: Scalars['ID'];
};


export type QueryUsersArgs = {
  filter?: InputMaybe<UserFilter>;
};

export type Todo = {
  createdAt: Scalars['Time'];
  finished: Scalars['Boolean'];
  id: Scalars['ID'];
  todo: Scalars['String'];
  updatedAt: Scalars['Time'];
  userId: Scalars['ID'];
};

export type TodoFilter = {
  finished?: InputMaybe<Scalars['Boolean']>;
  todo?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['ID']>;
};

export type UpdateTodoInput = {
  finished: Scalars['Boolean'];
  id: Scalars['ID'];
  todo: Scalars['String'];
  userId: Scalars['ID'];
};

export type UpdateUserInput = {
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type User = {
  created_at: Scalars['Time'];
  id: Scalars['ID'];
  name: Scalars['String'];
  updated_at: Scalars['Time'];
};

export type UserFilter = {
  name?: InputMaybe<Scalars['String']>;
};
