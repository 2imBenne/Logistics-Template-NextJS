"use client";
import React, { useEffect, useRef } from "react"; 
import FlagEn from "@/assets/images/flag.png";
import FlagVn from "@/assets/images/flag-vn.png";
import Link from "next/link";
import Image from "next/image";

export type LanguageOpt = {
    id?: number;
    image: string;
    language: string;
}

interface CustomSelectProps {
    languageArray?: LanguageOpt[];
    languageItem?: LanguageOpt;
    onChange?: (value: LanguageOpt) => void;
}
const defaultOptions: LanguageOpt[] = [
    { image: FlagVn.src, language: "Tiếng Việt" },
    { image: FlagEn.src, language: "English" },
];

const LanguageSelect: React.FC<CustomSelectProps> = ({
    languageArray = defaultOptions,
    languageItem,
    onChange,
}) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [selected, setSelected] = React.useState<LanguageOpt>(languageItem || languageArray[0]);
    const selectRef = useRef<HTMLDivElement>(null);
    
    useEffect(() => {
        if (languageItem) {
            setSelected(languageItem);
        }
    }, [languageItem]);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (selectRef.current && !selectRef.current.contains(e.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleSelect = (item: LanguageOpt) => {
        setSelected(item);
        onChange?.(item);
        setIsOpen(false);
    };

    return (
        <div className="dropdown lang-select d-none d-sm-block" ref={selectRef}>
            <Link className={`dropdown-toggle d-flex gap-1 align-items-center ${isOpen ? "show" : ""}`}
                href="#"
                onClick={(e) => {
                    e.preventDefault();
                    setIsOpen(!isOpen);
                }}
            >
                <Image
                    src={selected.image}
                    width={20}
                    height={20}
                    alt={selected.language}
                    style={{ borderRadius: "50%", objectFit: "cover" }}
                />
                <span>{selected.language}</span>
            </Link>

            <ul className={`dropdown-menu ${isOpen ? "show" : ""}`} style={{ position: "absolute", margin: "0px", transform: "translate(0px, 5px)" }}>
                {
                    languageArray.map((item: LanguageOpt, i) => (
                        <li key={i}>
                            <Link href="#" className={`dropdown-item ${selected.language === item.language ? "active" : ""}`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleSelect(item);
                                }}
                            >
                                <Image
                                    src={item.image}
                                    width={20}
                                    height={20}
                                    alt={item.language}
                                    style={{ borderRadius: "50%", objectFit: "cover", marginRight: "8px" }}
                                />
                                {item.language}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default LanguageSelect;

