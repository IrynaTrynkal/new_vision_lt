import { normalizePhone } from "@/utils/normalizePhone";

import { phoneList } from "../assets/contacts";

export const PhoneNumberList = ({
    className,
    onClick,
    dark,
}: {
    className?: string;
    onClick?: () => void;
    dark?: boolean;
}) => {
    return (
        <ul className={className}>
            {phoneList.map(item => (
                <li key={item.number}>
                    <a
                        onClick={onClick}
                        href={`tel:${normalizePhone(item.number)}`}
                        className={`${dark ? "group-hover:text-grey-90 hover:text-black hover:underline" : "group-hover:text-grey-90 hover:!text-ivory"} transition-all duration-300`}
                    >
                        <span className="font-oswald text-grey prepc:text-base text-sm leading-none font-medium uppercase">
                            {item.country} -
                        </span>{" "}
                        {item.number}
                    </a>
                </li>
            ))}
        </ul>
    );
};
