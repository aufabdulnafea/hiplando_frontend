'use client';

import { useEffect } from "react";
import { graphQLClient } from '@/lib/graphql-client'

// import NotificationsDropDown from "@/components/NotificationsDropDown";
// show tabs to add and edit
// horses
// horseCategories
// horseSexes
// horseDisciplines

// another tab only for users

export default function Admin() {
    useEffect(() => {
        const fetchData = async () => {
            try {
                const query = `
                query {
                    horseCategories {
                        id
                        name
                    }
                }
                `;
                const data = await graphQLClient.request(query);
                console.log(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, [])
    return (
        <div className="flex-1">

        </div>
    )
}