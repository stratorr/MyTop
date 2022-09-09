import { useState } from "react";
import { Label, Button, P, Headline, Rating } from "../components";
import { withLayout } from "../layout/Layout";

import { GetStaticProps } from "next";
import axios from "axios";
import { MenuItem } from "../interfaces/menu.interface";

const Home = ({ menu }: HomeProps): JSX.Element => {
    const [rating, setRating] = useState<number>(3);

    console.log(menu);

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
            <ul>
                {menu.map((item) => {
                    return (
                        <li key={item._id.secondCategory}>{item._id.secondCategory}</li>
                    );
                })}
            </ul>
        </>
    );
};

export default withLayout(Home);

export const getStaticProps: GetStaticProps = async () => {
    const firstCategory = 0;
    const { data: menu } = await axios.post<HomeProps>(
        process.env.NEXT_PUBLIC_DOMAIN + "/api/top-page/find",
        {
            firstCategory,
        }
    );

    return {
        props: {
            menu,
            firstCategory,
        },
    };
};

interface HomeProps extends Record<string, unknown> {
    menu: MenuItem[];
    category: number;
}
