import { useQuery } from '@tanstack/react-query';
import platforms from '../data/platforms';
import apiClient from '../services/api-client';
import { FetchResponse } from './useData';
import { Platform } from './useGames';
// interface Platform {
// 	id: number;
// 	name: string;
// 	slug: string;
// }

const usePlatforms = () =>
	useQuery({
		queryKey: ['platforms'],
		queryFn: () =>
			apiClient
				.get<FetchResponse<Platform>>('/platform/list/parents')
				.then(res => res.data),
		staleTime: 24 * 60 * 60 * 1000, //24h
		initialData: { count: platforms.length, results: platforms },
	});

export default usePlatforms;
