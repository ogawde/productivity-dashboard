import Header from "./Header";
import Notes from "./Notes";
import TaskManager from "./TaskManager";
import Timer from "./Timer";

function Dashboard() {
  return (
    <div className="min-h-screen p-6">
      <div className="max-w-7xl mx-auto grid grid-cols-12 grid-rows-8 gap-6 h-screen">
        <div className="col-span-3 row-span-2">
          <Header />
        </div>
        
        <div className="col-span-9 row-span-4">
          <Timer />
        </div>
        
        <div className="col-span-6 row-span-6">
          <Notes />
        </div>
        
        <div className="col-span-6 row-span-4">
          <TaskManager />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
