import { useParams } from 'react-router-dom';
import data from '../data/experience.json';
import NotFound from '../components/NotFound';
import AchievementCard from '../components/AchievementCard';

const ExperienceDetail = () => {
    const { id } = useParams();

    const job = data.find(item => item.id === parseInt(id));

    if (!job) {
        return (
            <NotFound />
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white px-6 md:px-12 lg:px-24 py-16">
            <h1 className="text-4xl font-bold mb-4">{job.jobTitle}</h1>
            <h2 className="text-2xl text-blue-400 mb-2">{job.company}</h2>
            <p className="text-gray-400 mb-2 italic">{job.startDate} — {job.endDate}</p>
            <h1 className="text-2xl pt-2 border-t border-gray-700 font-bold uppercase tracking-[0.1em] text-white-500 my-4">
                Summary
            </h1>
            <div
                className="prose prose-invert max-w-none"
                dangerouslySetInnerHTML={{ __html: job.description }}
            />

            {job.achievements && job.achievements.length > 0 && (
                <section>
                    <h1 className="text-2xl pt-2 border-t border-gray-700 font-bold uppercase tracking-[0.1em] text-white-500 my-4">
                        Technical Deep Dives & Impact
                    </h1>
                    <div className="grid grid-cols-1 gap-8">
                        {job.achievements.map((achievement, index) => (
                            <AchievementCard key={index} {...achievement} />
                        ))}
                    </div>
                </section>
            )}
        </div>
    );
};

export default ExperienceDetail;