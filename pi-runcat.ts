import type {
  ExtensionAPI,
  ExtensionContext,
  WorkingIndicatorOptions,
} from "@earendil-works/pi-coding-agent";

const RUNCAT_INDICATOR: WorkingIndicatorOptions = {
  // These are Plane 16 Private Use Area code points from the RunCat icon font:
  // U+100000 U+100001 U+100002 U+100003 U+100004. They render as animation frames
  // when the matching FONT is loaded. This avoids the observed CJK/text-font
  // collisions; extension and font versions must still be updated together.
  frames: ["\u{100000} ", "\u{100001} ", "\u{100002} ", "\u{100003} ", "\u{100004} "],
  intervalMs: 167,
};
function applyRunCatIndicator(ctx: ExtensionContext) {
  if (!ctx.hasUI) return;
  ctx.ui.setWorkingIndicator(RUNCAT_INDICATOR);
}

export default function(pi: ExtensionAPI) {
  pi.on("session_start", async (_event, ctx) => {
    applyRunCatIndicator(ctx);
  });
}
