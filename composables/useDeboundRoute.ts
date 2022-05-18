import { useTransition } from "~~/store/transition";
import { TIMMING_PAGE_TRANSITION } from "~~/constants/pageTransition";
export function useDebounceRoute(url: string) {
  const transitionStore = useTransition();
  const router = useRouter();

  transitionStore.setPrepare();
  let timer1 = setTimeout(() => {
    router.push(url);
  }, TIMMING_PAGE_TRANSITION / 2);
  let timer2 = setTimeout(() => {
    transitionStore.cancelPrepare();
  }, TIMMING_PAGE_TRANSITION);

  onUnmounted(() => {
    clearTimeout(timer1);
    clearTimeout(timer2);
  });
}
