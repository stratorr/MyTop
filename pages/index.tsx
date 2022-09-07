import type { NextPage } from "next";
import { useState } from "react";
import { Label, Button, P, Headline, Rating } from "../components";
import { Layout, withLayout } from "../layout/Layout";

const Home: NextPage = () => {
    const [rating, setRating] = useState<number>(3);

    return (
        <>
            <Headline tag="h1">Headline</Headline>
            <Button appearance="primary" arrow="right">
                Click
            </Button>
            <Button appearance="ghost" arrow="down">
                Down
            </Button>
            <P size="large">Paragraph</P>
            <Label size="small" color="green">
                10
            </Label>
            <Label size="medium" color="primary">
                medium
            </Label>
            <Label>1</Label>
            <Label color="red" size="medium">
                1
            </Label>
            <Rating rating={rating} isEditable={true} setRating={setRating} />
        </>
    );
};

export default withLayout(Home);
