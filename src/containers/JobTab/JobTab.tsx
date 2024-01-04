import { useEffect, useState } from "react";
import "./job-tab.css";
import JobSection from "../../components/JobSection";
import { JobData } from "../../components/JobSection/JobSection";

const URL = "https://course-api.com/react-tabs-project";

type JobsData = JobData[] | null;

const JobTab = () => {
	const [jobs, setJobs] = useState<JobsData>(null);
	const [jobIndex, setJobIndex] = useState(0);
	const [isLoading, setIsLoading] = useState(false);

	const fetchJobs = async () => {
		setIsLoading(true);

		try {
			const res = await fetch(URL);

			if (!res.ok) {
				throw new Error("Something went wrong");
			}

			const jobs = await res.json();
			setJobs(jobs);
			setIsLoading(false);
		} catch (error) {
			setIsLoading(false);
			console.log(error);
		}
	};

	useEffect(() => {
		fetchJobs();
	}, []);

	return (
		<section className="job-tab">
			<h1 className="title">Experience</h1>
			<div className="title-underline" />

			{isLoading && (
				<>
					<br />
					<p className="loading"></p>
				</>
			)}

			{jobs && (
				<div className="job-tab__content">
					<aside className="job-tab__tabs">
						{jobs.map((job, index) => (
							<button
								type="button"
								key={job.id}
								className={`job-tab__btn ${jobIndex === index ? "active-btn" : null} `}
								onClick={() => setJobIndex(index)}>
								{job.company}
							</button>
						))}
					</aside>
					<div className="job-tab__info">
						{
							<JobSection
								key={jobs[jobIndex].id}
								{...jobs[jobIndex]}
							/>
						}
					</div>
				</div>
			)}
		</section>
	);
};
export default JobTab;
