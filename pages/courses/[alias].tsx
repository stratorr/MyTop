import { withLayout } from "../../layout/Layout";

import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import axios from "axios";
import { MenuItem } from "../../interfaces/menu.interface";
import { TopPageModel } from "../../interfaces/page.interface";
import { ParsedUrlQuery } from "querystring";
import { ProductModel } from "../../interfaces/products.interface";

const firstCategory = 0;

const Course = ({ menu, page, products }: CourseProps): JSX.Element => {
    return <div>{products.length}</div>;
};

export default withLayout(Course);

export const getStaticPaths: GetStaticPaths = async () => {
    const { data: menu } = await axios.post<MenuItem[]>(
        process.env.NEXT_PUBLIC_DOMAIN + "/api/top-page/find",
        {
            firstCategory,
        }
    );

    return {
        paths: menu.flatMap((m) => m.pages.map((p) => "/courses/" + p.alias)),
        fallback: true,
    };
};

export const getStaticProps: GetStaticProps = async ({
    params,
}: GetStaticPropsContext<ParsedUrlQuery>) => {
    if (!params) {
        return {
            notFound: true,
        };
    }

    const { data: menu } = await axios.post<MenuItem[]>(
        process.env.NEXT_PUBLIC_DOMAIN + "/api/top-page/find",
        {
            firstCategory,
        }
    );

    const { data: page } = await axios.get<TopPageModel>(
        process.env.NEXT_PUBLIC_DOMAIN + "/api/top-page/byAlias/" + params.alias
    );

    const { data: products } = await axios.post<ProductModel[]>(
        process.env.NEXT_PUBLIC_DOMAIN + "/api/product/find",
        {
            category: page.category,
            limit: 10,
        }
    );

    return {
        props: {
            menu,
            firstCategory,
            page,
            products,
        },
    };
};

interface CourseProps extends Record<string, unknown> {
    menu: MenuItem[];
    category: number;
    page: TopPageModel;
    products: ProductModel[];
}
