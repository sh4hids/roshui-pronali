import { GithubLogoIcon } from '@phosphor-icons/react';
import { format } from 'date-fns';
import { useEffect, useState } from 'react';

function GitHubStargazer({ repository }: { repository: string }) {
    const [stars, setStars] = useState(0);

    useEffect(() => {
        if (repository) {
            const today = format(new Date(), 'yyyy-MM-dd');
            const cachedData = localStorage.getItem(`stargazers:${repository}`);
            const cachedStars = JSON.parse(cachedData || '{}');

            if (cachedStars[today] !== undefined) {
                setStars(cachedStars[today]);
            } else {
                fetch(`https://api.github.com/repos/${repository}`)
                    .then((res) => res.json())
                    .then((data) => {
                        const stars = data['stargazers_count'];

                        setStars(stars);

                        localStorage.setItem(
                            `stargazers:${repository}`,
                            JSON.stringify({
                                [today]: stars,
                            })
                        );
                    });
            }
        }
    }, [repository]);

    return (
        <a
            href="https://github.com/sh4hids/roshui-pronali"
            target="_blank"
            className="bg-chilli-600 hover:bg-chilli-700 text-pablo-50 flex h-full cursor-pointer items-center rounded-xl px-2 py-0.5 drop-shadow duration-300 ease-in-out hover:drop-shadow-lg"
        >
            <GithubLogoIcon className="h-5 w-5" />
            <span className="min-w-5 text-center">
                {stars < 1
                    ? '∞'
                    : Intl.NumberFormat('bn', {
                          notation: 'compact',
                          maximumFractionDigits: 1,
                      }).format(stars)}
            </span>
        </a>
    );
}

export default GitHubStargazer;
