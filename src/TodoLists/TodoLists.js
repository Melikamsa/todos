import "./TodoListsStyle.css";

function TodoLists({ todo }) {
  return (
    <>
      <section className="boxs">
        <div className="box">
          <p className="text">{todo}</p>
          <div className="btn">
            <button>Delete</button>
            <button>Edet</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default TodoLists;
