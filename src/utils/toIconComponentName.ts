import { IconHirurgichneLikuvannyaGlaukomi } from "@/components/shared/icons/IconHirurgichneLikuvannyaGlaukomi";
import { IconIntravitrealniInekczii } from "@/components/shared/icons/IconIntravitrealniInekczii";
import { IconLazerneLikuvannyaZahvoryuvanOka } from "@/components/shared/icons/IconLazerneLikuvannyaZahvoryuvanOka";
import { IconRefrakczijnaLensektomiya } from "@/components/shared/icons/IconRefrakczijnaLensektomiya";

export const toIconComponentName = (key: string) => {
    switch (key) {
        case "dry-eye-syndrome-treatment":
            return IconIntravitrealniInekczii;
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
