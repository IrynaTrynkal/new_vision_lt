import { IconDityacheViddilennya } from "@/components/shared/icons/IconDityacheViddilennya";
import { IconHirurgichneLikuvannyaGlaukomi } from "@/components/shared/icons/IconHirurgichneLikuvannyaGlaukomi";
import { IconLazerneLikuvannyaZahvoryuvanOka } from "@/components/shared/icons/IconLazerneLikuvannyaZahvoryuvanOka";
import { IconRefrakczijnaLensektomiya } from "@/components/shared/icons/IconRefrakczijnaLensektomiya";

export const toIconComponentName = (key: string) => {
    switch (key) {
        case "vaiku-akiu-patikra":
            return IconDityacheViddilennya;
        case "lazerinis-akiu-ligu-gydymas":
            return IconLazerneLikuvannyaZahvoryuvanOka;
        case "skaidraus-lesio-operacija":
            return IconRefrakczijnaLensektomiya;
        case "glaukomos-gydymas":
            return IconHirurgichneLikuvannyaGlaukomi;
        default:
            return null;
    }
};
