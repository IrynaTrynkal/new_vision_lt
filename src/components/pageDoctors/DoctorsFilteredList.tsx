import { Pagination } from "@/components/shared/Pagination";

import { DepartmentsKey, DoctorsOrderQueryResult } from "../../../sanity.types";
import { DoctorCardDoctorsPage } from "./DoctorCardDoctorsPage";

const ITEMS_PER_PAGE = 6;

export const DoctorsFilteredList = ({
    pageNumber = 1,
    list,
    className,
}: {
    pageNumber?: number;
    list: DoctorsOrderQueryResult;
    selectedDepartment?: DepartmentsKey;
    className?: string;
}) => {
    const totalPages = Math.ceil((list ?? []).length / ITEMS_PER_PAGE);

    const startIndex = (pageNumber - 1) * ITEMS_PER_PAGE;
    const currentItems = (list ?? []).slice(
        startIndex,
        startIndex + ITEMS_PER_PAGE
    );
    return (
        <div className={className}>
            <ul className="tab:px-0 tab:max-w-full tab:flex-row pc:justify-center tab:flex-wrap pc:gap-5 tab:justify-center prepc:justify-normal mx-auto flex max-w-[540px] flex-col gap-4 px-4">
                {currentItems.map((doc, ind) => (
                    <li key={ind}>
                        <DoctorCardDoctorsPage data={doc} />
                    </li>
                ))}
            </ul>
            {totalPages > 1 && (
                <Pagination currentPage={pageNumber} totalPages={totalPages} />
            )}
        </div>
    );
};
