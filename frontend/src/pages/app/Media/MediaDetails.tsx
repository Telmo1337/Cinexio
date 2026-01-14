import { useNavigate, useParams } from "react-router-dom";
import { Tabs, Loader, Center, Title, Stack, Button } from "@mantine/core";
import { useEffect, useState } from "react";
import type { Media } from "../../../test/types/media";
import { getMediaById } from "../../services/media.service";
import OverviewTab from "./tabs/OverviewTab";
import CommentsTab from "./tabs/CommentsTab";
import LibraryTab from "./tabs/LibraryTab";




export default function MediaDetails() {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [media, setMedia] = useState<Media | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!id) return;

        getMediaById(id)
            .then(setMedia)
            .finally(() => setLoading(false));
    }, [id]);

    if (loading) {
        return (
            <Center>
                <Loader />
            </Center>
        );
    }

    if (!media) return null;

    return (
        <Stack>

            <Title>{media.title}</Title>

            <Tabs defaultValue="overview">
                <Tabs.List>
                    <Tabs.Tab value="overview">Overview</Tabs.Tab>
                    <Tabs.Tab value="comments">Comments</Tabs.Tab>
                    <Tabs.Tab value="library">Library</Tabs.Tab>
                </Tabs.List>

                <Tabs.Panel value="overview" pt="md">
                    <OverviewTab media={media} />
                </Tabs.Panel>

                <Tabs.Panel value="comments" pt="md">
                    <CommentsTab mediaId={media.id} />
                </Tabs.Panel>

                <Tabs.Panel value="library" pt="md">
                    <LibraryTab mediaId={media.id} />
                </Tabs.Panel>

            </Tabs>
            <Button
                variant="light"
                onClick={() => navigate("/app")}
                w="fit-content"
            >
                Back to Catalog
            </Button>
        </Stack>
    );
}
