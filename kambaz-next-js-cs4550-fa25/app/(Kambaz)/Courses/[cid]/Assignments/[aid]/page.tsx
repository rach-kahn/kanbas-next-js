import { Button } from "react-bootstrap";
import AssignmentEditorForms from "./AssignmentEditorForms";

export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <AssignmentEditorForms />
      <div className="wd-assignment-editor-buttons">
        <Button variant="secondary"  id="wd-view-progress">
                Cancel
            </Button>
        <Button variant="danger"> Save </Button>
      </div>
    </div>
);}
