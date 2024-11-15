import { useEffect, useMemo } from "react";
import {
    PropertiesActionType,
    PropertiesStateCategoryEnum,
    PropertiesStateElementType,
} from "../../../../../types/properties";
import { InputNumber } from "../../../../atoms/input-number";
import {
    addListItem,
    removeListItem,
    updateListSymbol,
} from "../../../../../util/listHelper";
import { InputText } from "../../../../atoms/input-text";

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
                ? selected?.firstChild?.firstChild?.textContent || "a"
                : "*",
            newCount: selected ? selected.children.length : 0,
        };
    }, [selected]);

    useEffect(() => {
        dispatchListCount(newCount);
        dispatchBulletVariation(newBulletVariation);
    }, [newBulletVariation, newCount, selected]);

    const dispatchListCount = (value: number) => {
        dispatch({
            category: PropertiesStateCategoryEnum.element,
            value: { listCount: value },
        });
    };

    const dispatchBulletVariation = (value: string) => {
        dispatch({
            category: PropertiesStateCategoryEnum.element,
            value: { listBulletVariation: value },
        });
    };

    const handleBulletVariationChange = (value: string) => {
        if (selected) {
            updateListSymbol(selected, value);
            dispatchBulletVariation(value);
        }
    };

    const handleListCountChange = (count: number) => {
        if (selected) {
            if (listCount < count) addListItem(selected);
            else if (listCount > count && count > 0) removeListItem(selected);
            else return;
            dispatchListCount(count);
        }
    };

    return (
        <>
            <InputText
                title={"List Symbol"}
                maxLength={3}
                text={listBulletVariation}
                onChange={handleBulletVariationChange}
            />
            <InputNumber
                title={"Item Count"}
                value={listCount}
                onChange={handleListCountChange}
            />
        </>
    );
};
