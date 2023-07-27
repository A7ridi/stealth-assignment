import React, { useEffect, useState } from "react";
import Modal from "../common/dialog/Modal";
import CreateJob from "../stepper/CreateJob";
import { Dialog } from "@headlessui/react";
import PrimaryButton from "../common/button/PrimaryButton";
import JobCard from "../common/card/JobCard";
import { deleteJobCard, fetchJobCard } from "../../api/actions";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [jobDetails, setJobDetails] = useState({});

  const toggleModal = () => setIsOpen((cur) => !cur);

  const getJobs = () => {
    fetchJobCard((data) => {
      setLoading(false);
      setJobs(data);
    });
  };

  useEffect(() => {
    getJobs();
  }, []);

  const deleteHandler = async (id) => {
    const data = await deleteJobCard(id);
    if (data) {
      getJobs();
    } else alert("Something went wrong!!!");
  };

  return (
    <div className="p-10">
      <Modal
        toggleModal={toggleModal}
        isOpen={isOpen}
        button={
          <PrimaryButton
            title="Create Job"
            onClick={() => {
              setJobDetails(null);
              toggleModal();
            }}
          />
        }
      >
        <Dialog.Panel className="w-577 h-564 p-8 transform overflow-hidden rounded-lg bg-white text-left align-middle shadow-xl transition-all">
          <CreateJob
            toggleModal={toggleModal}
            getJobs={getJobs}
            jobDetails={jobDetails}
          />
        </Dialog.Panel>
      </Modal>

      <div className="mt-10 flex flex-wrap gap-16">
        {loading && <div>Loading...</div>}

        {!loading &&
          jobs?.map((job) => (
            <JobCard
              key={job.id}
              job={job}
              deleteHandler={deleteHandler}
              toggleModal={toggleModal}
              setJobDetails={setJobDetails}
            />
          ))}
      </div>
    </div>
  );
};

export default Home;
