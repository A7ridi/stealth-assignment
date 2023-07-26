import React, { useEffect, useState } from "react";
import Modal from "../common/dialog/Modal";
import CreateJob from "../stepper/CreateJob";
import { Dialog } from "@headlessui/react";
import PrimaryButton from "../common/button/PrimaryButton";
import JobCard from "../common/card/JobCard";
import { fetchJobCard } from "../../api/actions";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  const toggleModal = () => setIsOpen((cur) => !cur);

  useEffect(() => {
    fetchJobCard((data) => {
      setLoading(false);
      setJobs(data);
    });
  }, []);

  return (
    <div className="p-10">
      <Modal
        toggleModal={toggleModal}
        isOpen={isOpen}
        button={<PrimaryButton title="Create Job" onClick={toggleModal} />}
      >
        <Dialog.Panel className="w-577 h-564 p-8 transform overflow-hidden rounded-lg bg-white text-left align-middle shadow-xl transition-all">
          <CreateJob toggleModal={toggleModal} />
        </Dialog.Panel>
      </Modal>

      <div className="mt-10 grid grid-cols-2 gap-16">
        {loading && <div>Loading...</div>}

        {!loading && jobs?.map((job) => <JobCard key={job.id} job={job} />)}
      </div>
    </div>
  );
};

export default Home;
