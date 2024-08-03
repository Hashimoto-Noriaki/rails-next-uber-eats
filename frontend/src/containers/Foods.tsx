import React, { Fragment } from 'react';
import { useRouter} from 'next/router';

export const Foods: React.FC = () => {
    const router = useRouter();
    const { restaurantsId } = router.query;
    return (
        <>
            フード一覧
            <p>
                restaurantsIdは {restaurantsId} です
            </p>
        </>
    );
};
