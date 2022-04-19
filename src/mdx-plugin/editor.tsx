import { visitAsync } from "./unist-utils";
import { transformEditor } from "./code";
import { JsxNode, SuperNode } from "./nodes";

export async function transformEditorNodes(
  tree: SuperNode,
  { theme }: { theme: any }
) {
  await visitAsync(tree, "mdxJsxFlowElement", async (node, index, parent) => {
    if ((node as unknown as JsxNode).name === "CH.Code") {
      await transformEditor({ node, index, parent: parent! }, { theme });
    }
  });
}
