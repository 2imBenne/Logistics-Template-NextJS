"use client";
import { useContext } from 'react';
import { contextType } from './contextType';
import ProjectContext from './ProjectContext';

const useTranshubContext = (): contextType => {
   const context = useContext(ProjectContext);
    if (context === null) {
        throw new Error("Context Null");
    }
    return context;
};

export { useTranshubContext };