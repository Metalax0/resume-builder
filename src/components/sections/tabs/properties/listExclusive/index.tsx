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
} from "../../../../../util/addRemoveListItem";

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
    const { listCount } = stateData;

    const { newCount } = useMemo(() => {
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
        dispatchListCount(newCount);
    }, [newCount]);

    const dispatchListCount = (value: number) => {
        dispatch({
            category: PropertiesStateCategoryEnum.element,
            value: { listCount: value },
        });
    };

    const handleListCountChange = (count: number) => {
        if (selected) {
            if (stateData.listCount < count) addListItem(selected);
            else if (stateData.listCount > count && count > 0)
                removeListItem(selected);
            else return;
            dispatchListCount(count);
        }
    };

    return (
        <>
            <InputNumber
                title={"Item Count"}
                value={listCount}
                onChange={handleListCountChange}
            />
        </>
    );
};
