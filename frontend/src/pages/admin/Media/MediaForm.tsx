import {
    TextInput,
    Select,
    NumberInput,
    Textarea,
    Button,
    Stack,
    MultiSelect
} from "@mantine/core";
import { useForm } from "@mantine/form";
import type { MediaPayload } from "../../services/media.service";

interface MediaFormProps {
    initialValues: MediaPayload;
    onSubmit: (values: MediaPayload) => void;
}

const CATEGORY_OPTIONS = [
    "Action",
    "Drama",
    "Comedy",
    "Sci-Fi",
    "Thriller",
    "Romance",
    "Animation",
];

export default function MediaForm({
    initialValues,
    onSubmit,
}: MediaFormProps) {
    const form = useForm<MediaPayload>({
        initialValues,
    });



    return (
        <form onSubmit={form.onSubmit(onSubmit)}>
            <Stack>
                <TextInput
                    label="Título"
                    withAsterisk
                    {...form.getInputProps("title")}
                />

                <Select
                    label="Tipo"
                    withAsterisk
                    data={[
                        { value: "MOVIE", label: "Filme" },
                        { value: "SERIES", label: "Série" },
                    ]}
                    {...form.getInputProps("type")}
                />
                <MultiSelect
                    label="Categoria"
                    withAsterisk
                    data={CATEGORY_OPTIONS}
                    searchable
                    {...form.getInputProps("category")}
                />


                <NumberInput
                    label="Ano de lançamento"
                    min={1900}
                    max={new Date().getFullYear()}
                    withAsterisk
                    {...form.getInputProps("releaseYear")}
                />

                <Textarea
                    label="Descrição"
                    autosize
                    minRows={3}
                    {...form.getInputProps("description")}
                />

                <Button type="submit">Guardar</Button>
            </Stack>
        </form>
    );
}
