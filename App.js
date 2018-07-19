import React from "react";
import { View, ScrollView } from "react-native";
import Header from "./components/header";
import TaskList from "./components/task-list";
import MenuTask from "./components/menu-task";
import ButtonAddTask from "./components/button-add-task";

const taskList = [
  {
    id: 0,
    content: "Aller voir seb",
    status: "En cours"
  },
  {
    id: 1,
    content: "Faire la vaisselle",
    status: "En cours"
  },
  {
    id: 2,
    content: "Faire le menage",
    status: "Terminé"
  },
  {
    id: 3,
    content: "Aller voir seb",
    status: "En cours"
  },
  {
    id: 4,
    content: "Faire la vaisselle",
    status: "En cours"
  },
  {
    id: 5,
    content: "Faire le menage",
    status: "Terminé"
  },
  {
    id: 6,
    content: "Aller voir seb",
    status: "En cours"
  },
  {
    id: 7,
    content: "Faire la vaisselle",
    status: "En cours"
  },
  {
    id: 8,
    content: "Faire le menage",
    status: "Terminé"
  },
  {
    id: 9,
    content: "Aller voir seb",
    status: "En cours"
  },
  {
    id: 10,
    content: "Faire la vaisselle",
    status: "En cours"
  },
  {
    id: 11,
    content: "Faire le menage",
    status: "Terminé"
  }
];

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { taskList, isMenuTaskVisible: false };
  }

  toggleMenuTaskVisibility = () => {
    this.setState({ isMenuTaskVisible: !this.state.isMenuTaskVisible });
  };
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header content="Liste de tâche en props" />
        <ScrollView>
          <TaskList
            onPressCallBack={this.toggleMenuTaskVisibility}
            taskList={this.state.taskList}
          />
        </ScrollView>
        <MenuTask
          isVisible={this.state.isMenuTaskVisible}
          onDisapearCallBack={this.toggleMenuTaskVisibility}
        />
        <ButtonAddTask />
      </View>
    );
  }
}
