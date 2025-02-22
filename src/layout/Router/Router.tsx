import { Route, Routes } from 'react-router';
import { RecommendationDetailsScreen } from '@pages/RecommendationDetailsScreen';
import { HomeScreen } from '@pages/HomeScreen';
import { Layout } from '@/layout/Layout';
import { RecommendationsCatalogScreen } from '@pages/RecommendationsCatalogScreen';

export interface RouterProps {}

export const Router = (_props: RouterProps) => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route path="recommendation">
                    <Route index element={<RecommendationsCatalogScreen />}></Route>
                    <Route path=":id" element={<RecommendationDetailsScreen />}></Route>
                </Route>

                <Route path="/" element={<HomeScreen />} />
            </Route>
        </Routes>
    );
};
