import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, getTodo } from "../Redux/Action/index";
import Tododata from "./Tododata";
import Tabs from "./Tabs";
import { ACTIVE_TODO, DONE_TODO } from "../Redux/Action/type";
const Todo = () => {
  const dispatch = useDispatch();
  const data = useSelector((cur) => cur.todos);
  const currenttab = useSelector((cur) => cur.currenttab);
  console.log(data);
  console.log(currenttab);
  useEffect(() => {
    dispatch(getTodo());
  }, []);
  const getTodos = () => {
    if (currenttab === ACTIVE_TODO) {
      return data.filter((cur) => !cur.done);
    } else if (currenttab === DONE_TODO) {
      return data.filter((cur) => cur.done);
    }
  };
  const removealltodo = () => {
    data.forEach(({ done, _id }) => {
      if (done) {
        dispatch(deleteTodo(_id));
      }
    });
  };
  return (
    <>
      <div className="tab">
        <Tabs currenttab={currenttab} />
        <div>
          <span>
            {currenttab === DONE_TODO ? (
              <button className="removeall" onClick={() => removealltodo()}>
                Remove All Done
              </button>
            ) : null}
          </span>
        </div>
      </div>
      <div>
        {getTodos().map((todo) => {
          return <Tododata key={todo._id} todo={todo} />;
        })}
      </div>
    </>
  );
};

export default Todo;
