import cn from "classnames";
import { useEffect, useState, KeyboardEvent } from "react";
import styles from "./Rating.module.css";
import { RatingProps } from "./RatingProps";
import StarIcon from "./star.svg";

export const Rating = ({
    isEditable = false,
    rating,
    setRating,
    ...props
}: RatingProps) => {
    const [ratingArr, setRatingArr] = useState<JSX.Element[]>(new Array(5).fill(<></>));

    useEffect(() => {
        constructRating(rating);
    }, [rating]);

    const constructRating = (currentRating: number) => {
        const updatedArr = ratingArr.map((item: JSX.Element, i: number) => {
            return (
                <span
                    className={cn(styles.star, {
                        [styles.filled]: i < currentRating,
                        [styles.editable]: isEditable,
                    })}
                    onMouseEnter={() => changeDisplay(i + 1)}
                    onMouseLeave={() => changeDisplay(rating)}
                    onClick={() => onClickRating(i + 1)}>
                    <StarIcon
                        tabIndex={isEditable ? 0 : -1}
                        onKeyDown={(e: KeyboardEvent<SVGAElement>) =>
                            isEditable && handleSpace(i + 1, e)
                        }
                    />
                </span>
            );
        });
        setRatingArr(updatedArr);
    };

    function changeDisplay(i: number) {
        if (!isEditable) return;
        constructRating(i);
    }

    function onClickRating(i: number) {
        if (!isEditable || !setRating) return;
        setRating(i);
    }

    function handleSpace(i: number, e: KeyboardEvent<SVGAElement>) {
        if (e.code !== "Enter" || !setRating) {
            return;
        }
        setRating(i);
    }

    return (
        <div {...props}>
            {ratingArr.map((item, i) => {
                return <span key={i}>{item}</span>;
            })}
        </div>
    );
};
