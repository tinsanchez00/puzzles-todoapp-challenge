
export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type MainNavigatorParamList = {
  BoardScreen: undefined;
  AddScreen: undefined;
};

export type TabsTypes = "All"|"Completed"|"Uncompleted"|"Favorite";

export type InputTypes = "title" | "deadline" | "startTime" | "endTime" | "remind" | "repeat"

export interface ISelectTab 
{
    (name: TabsTypes): void;
}

export interface ITask {
  title: string,
  deadline: string,
  startTime: string,
  endTime: string, 
  remind: string,
  repeat: string
}

export type StatusTypes = "completed" | "uncompleted"

export interface ITaskRedux extends ITask {
  id: string,
  status: StatusTypes
}

export interface IAction {
  type: string,
  payload: any
}