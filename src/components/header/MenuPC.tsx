"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useState } from "react";

import { Link } from "@/i18n/navigation";

import { menuList } from "../assets/menu";
import { IconChevron } from "../shared/icons/IconChevron";
import { PatientsMenu } from "./PatientsMenu";
import { ServicesMenu } from "./ServicesMenu";

export const MenuPC = ({
    className,
    onClick,
}: {
    className?: string;
    onClick?: () => void;
}) => {
    const t = useTranslations("Menu");
    const [openMenus, setOpenMenus] = useState<{ [key: string]: boolean }>({
        paslaugos: false,
        "informacija-pacientams": false,
    });

    const handleOpen = (key: string) => {
        setOpenMenus({
            paslaugos: key === "paslaugos",
            "informacija-pacientams": key === "informacija-pacientams",
        });
    };

    const closeSubmenus = () => {
        setOpenMenus({
            paslaugos: false,
            "informacija-pacientams": false,
        });
    };

    return (
        <ul className={`${className}`}>
            {menuList.map((item, idx) => {
                const hasSubmenu =
                    item.key === "paslaugos" ||
                    item.key === "informacija-pacientams";
                return (
                    <li
                        key={idx}
                        onMouseEnter={() => hasSubmenu && handleOpen(item.key)}
                        onMouseLeave={() => hasSubmenu && closeSubmenus()}
                    >
                        <div
                            className={`prepc:px-1.5 flex items-center justify-center ${(item.key === "paslaugos" && openMenus.paslaugos) || (item.key === "informacija-pacientams" && openMenus["informacija-pacientams"]) ? "text-ivory bg-black" : "hover:text-ivory text-black hover:bg-black"}`}
                        >
                            <Link
                                href={`/${item.key}` as any}
                                onClick={hasSubmenu ? closeSubmenus : onClick}
                                className={
                                    "font-oswald prepc:text-base prepc:h-[72px] flex h-12 items-center text-xs font-medium uppercase"
                                }
                            >
                                {t(item.key)}
                            </Link>
                            {hasSubmenu && (
                                <button
                                    type="button"
                                    className="flex h-6 w-6 items-center justify-center"
                                >
                                    <IconChevron />
                                </button>
                            )}
                        </div>
                        <AnimatePresence initial={false}>
                            {item.key === "paslaugos" &&
                                openMenus.paslaugos && (
                                    <motion.div
                                        initial={{ height: 0 }}
                                        animate={{ height: "auto" }}
                                        exit={{ height: 0 }}
                                        transition={{
                                            duration: 0.8,
                                            ease: "easeInOut",
                                        }}
                                        className="bg-ivory absolute top-full left-0 z-10 w-full overflow-hidden"
                                    >
                                        <ServicesMenu onClick={closeSubmenus} />
                                    </motion.div>
                                )}

                            {item.key === "informacija-pacientams" &&
                                openMenus["informacija-pacientams"] && (
                                    <motion.div
                                        key="informacija-pacientams"
                                        initial={{ height: 0 }}
                                        animate={{ height: "auto" }}
                                        exit={{ height: 0 }}
                                        transition={{
                                            duration: 0.3,
                                            ease: "easeInOut",
                                        }}
                                        className="bg-ivory absolute top-full left-0 z-10 w-full overflow-hidden"
                                    >
                                        <PatientsMenu onClick={closeSubmenus} />
                                    </motion.div>
                                )}
                        </AnimatePresence>
                    </li>
                );
            })}
        </ul>
    );
};
