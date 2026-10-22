"use client";
import React, { useEffect, useRef } from "react"; 
import Flag from "@/assets/images/flag.png";
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
    { image: Flag.src, language: "English" },
    { image: Flag.src, language: "Japanese" },
    { image: Flag.src, language: "Chinese" },
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
                onClick={() => setIsOpen(!isOpen)}
            >
                <Image src={selected.image} width={24} height={24} alt="flag" />
                <span>{selected.language}</span>
            </Link>

            <ul className={`dropdown-menu ${isOpen ? "show" : ""}`} style={{ position: "absolute", margin: "0px", transform: "translate(0px, 5px)" }}>
                {
                    languageArray.map((item: LanguageOpt, i) => (
                        <li key={i}>
                            <Link href="#" className="dropdown-item"
                                onClick={() => handleSelect(item)}
                            >
                                <Image
                                    src={item.image}
                                    width={24}
                                    height={24}
                                    alt={item?.language}
                                />
                                {item?.language}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default LanguageSelect;

