import { Slider } from "../../atoms/slider";
import { useSettingsContext } from "../../context/settingsContext";

export const ZoomSlider = () => {
    const { settingsState, settingsDispatch } = useSettingsContext();

    const handleZoomChange = (value: number) => {
        settingsDispatch({
            value: { builderZoom: value },
        });
    };

    return (
        <Slider
            title={""}
            value={settingsState.builderZoom}
            min={50}
            max={100}
            handleChange={(value) => handleZoomChange(value)}
            orientation="vertical"
        />
    );
};
