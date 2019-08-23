import { Button } from "reactstrap";

const ControlMenu = props => {
  return (
    <div className="control-menu">
      <h1 className="title">Blogs Ahoy...</h1>
      <div className="status-box">
        {props.isLoading ? "Saving..." : "Saved"}
      </div>
      <Button
        disabled={props.isLoading}
        onClick={props.save}
        className="btn-outline-info"
      >
        Save
      </Button>
    </div>
  );
};

export default ControlMenu;
