import React from "react";
import NetflixLogo from "../../../assets/icon/netflix-logo.svg";
import PrimaryButton from "../button/PrimaryButton";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";

const JobCard = ({ job }) => {
  return (
    <div className="flex items-start gap-x-2 px-6 py-4 border border-card-border rounded-lg bg-card-color">
      <img src={NetflixLogo} alt="netflix" width="48" />

      <div className="flex flex-1 flex-col gap-y-6">
        <div className="flex flex-col">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl">{job?.jobTitle || ""}</h2>
            <div className="flex gap-3">
              <PencilIcon className="w-5 h-5 cursor-pointer" />
              <TrashIcon className="w-5 h-5 cursor-pointer" />
            </div>
          </div>
          <h3>
            {job.companyName} - {job.industry}
          </h3>
          <h3 className="text-placeholder-color">
            {job?.location || ""} ( {job?.remote || ""})
          </h3>
        </div>

        <div className="flex flex-col gap-y-2">
          <h3>Part-Time (9.00 am - 5.00 pm IST)</h3>
          <h3>
            Experience ({job?.experience?.min || ""} -{" "}
            {job?.experience?.max || ""} years)
          </h3>
          <h3>
            INR (₹) {job?.salary?.min || ""} - {job?.salary?.max || ""} / month
          </h3>
          <h3>51 - {job?.totalEmployee || ""} employees</h3>
        </div>

        <div>
          <PrimaryButton title="Apply Now" />
        </div>
      </div>
    </div>
  );
};

export default JobCard;
