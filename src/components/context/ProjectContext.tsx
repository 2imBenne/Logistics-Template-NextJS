"use client";

import { createContext } from "react";
import { contextType } from "./contextType";

const ProjectContext = createContext<contextType | null>(null);
export default ProjectContext;
