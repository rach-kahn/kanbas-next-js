/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "next/navigation";
import * as db from "../../../Database";
import * as client from "../../client";
import { FormControl, ListGroup, ListGroupItem } from "react-bootstrap";
import ModulesControls from "./ModulesControls"
import ModuleControlButtons from "./ModuleControlButtons";
import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "./LessonControlButtons";
import { addModule, deleteModule, editModule, updateModule, setModules } from "./reducer";

export default function Modules() {
  const { cid } = useParams();
  const courseId = Array.isArray(cid) ? cid[0] : cid || ""; //addded this line, to prevent error 
  const [moduleName, setModuleName] = useState("");
  const { modules } = useSelector((state: any) => state.modulesReducer);
  const dispatch = useDispatch();
  const fetchModules = async () => {
    const modules = await client.findModulesForCourse(cid as string);
    dispatch(setModules(modules));
  };
  const onCreateModuleForCourse = async () => {
    if (!cid) return;
    const newModule = { name: moduleName, course: courseId }; //changed cid to courseId
    const module = await client.createModuleForCourse(courseId, newModule); //ignore cid or change the definition , changed cid to courseId
    dispatch(setModules([...modules, module]));
  };
  const onRemoveModule = async (moduleId: string) => {
    await client.deleteModule(moduleId);
    dispatch(setModules(modules.filter((m: any) => m._id !== moduleId)));
  };
  const onUpdateModule = async (module: any) => {
    await client.updateModule(module);
    const newModules = modules.map((m: any) => m._id === module._id ? module : m);
    dispatch(setModules(newModules));
  };


  useEffect(() => {
    fetchModules();
  }, []);



  return (
    <div>
      <ModulesControls setModuleName={setModuleName} moduleName={moduleName} addModule={onCreateModuleForCourse} /> <br /><br /><br /><br />
      <ListGroup className="rounded-0" id="wd-modules">
        {modules
          .map((module: any) => (

            <ListGroupItem key={module._id} className="wd-module p-0 mb-5 fs-5 border-gray">
              <div className="wd-title p-3 ps-2 bg-secondary">
                <BsGripVertical className="me-2 fs-3" /> {!module.editing && module.name}
                {module.editing && (
                  <FormControl className="w-50 d-inline-block"
                    onChange={(e) => dispatch(updateModule({ ...module, name: e.target.value }))}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                       onUpdateModule({ ...module, editing: false });
                      }
                    }}
                    defaultValue={module.name} />
                )}

                <ModuleControlButtons moduleId={module._id}
                  deleteModule={onRemoveModule}
                  editModule={(moduleId) => dispatch(editModule(moduleId))} />
              </div>
              {module.lessons && (
                <ListGroup
                  className="wd-lessons rounded-0">
                  {module.lessons.map((lesson: any) => (

                    <ListGroupItem key={lesson._id} className="wd-lesson p-3 ps-1">
                      <BsGripVertical className="me-2 fs-3" /> {lesson.name} <LessonControlButtons />
                    </ListGroupItem>
                  ))}
                </ListGroup>)}
            </ListGroupItem>))}
      </ListGroup>
    </div >
  );
}
