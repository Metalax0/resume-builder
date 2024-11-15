import { useEffect, useMemo } from "react";
import {
    PropertiesActionType,
    PropertiesStateCategoryEnum,
    PropertiesStateElementType,
} from "../../../../../types/properties";
import { InputNumber } from "../../../../atoms/input-number";

export interface ListExclusivePropsType {
    selected: HTMLElement | null;
    stateData: PropertiesStateElementType;
    dispatch: React.Dispatch<PropertiesActionType>;
}

export const ListExclusive = ({
    selected,
    stateData,
    dispatch,
}: ListExclusivePropsType) => {
    const { listBulletVariation, listCount } = stateData;

    const { newBulletVariation, newCount } = useMemo(() => {
        return {
            newBulletVariation: selected
                ? Array.from(selected!.children).findIndex((child) => {
                      return child === document.activeElement;
                  })
                : 3,
            newCount: selected ? selected.children.length : 0,
        };
    }, [selected]);

    useEffect(() => {
        // dispatchBulletVariation(newBulletVariation);
        dispatchListCount(newCount);
    }, [newBulletVariation, newCount]);

    // const dispatchBulletVariation = (value: number) => {
    //     dispatch({
    //         category: PropertiesStateCategoryEnum.element,
    //         value: { listBulletVariation: value },
    //     });
    // };

    const dispatchListCount = (value: number) => {
        dispatch({
            category: PropertiesStateCategoryEnum.element,
            value: { listCount: value },
        });
    };

    // const handleListBulletVariationChange = (variation: number) => {
    //     dispatchBulletVariation(variation);
    // };

    const handleListCountChange = (count: number) => {
        dispatchListCount(count);
    };

    return (
        <>
            {/* <ListsDropDown
                value={listBulletVariation}
                onCHange={handleListBulletVariationChange}
            /> */}

            <InputNumber
                title={"Item Count"}
                value={listCount}
                onChange={handleListCountChange}
            />
        </>
    );
};
