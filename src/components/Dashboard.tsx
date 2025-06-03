import Header from "./Header";
import Notes from "./Notes";
import TaskManager from "./TaskManager";
import Timer from "./Timer";

function Dashboard() {
  return (
    <>
      <div className="flex flex-row min-h-screen justify-center items-center gap-8 p-8">
        <Header />
        <Timer />
        <Notes />
        <TaskManager />
      </div>
    </>
  );
}

export default Dashboard;
