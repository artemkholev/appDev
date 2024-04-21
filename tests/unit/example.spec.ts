import { shallowMount } from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld.vue";

describe("HelloWorld.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(HelloWorld, {
      props: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });

  it("При увеличении count появляется вывод 5+", async () => {
    const wrapper = shallowMount(HelloWorld, {
      props: { msg: "Message" },
      data() {
        return { count: 4 };
      },
    });

    // Обновляем значение count с помощью клика
    await wrapper.find("button").trigger("click");
    await wrapper.find("button").trigger("click");
    await wrapper.find("button").trigger("click");
    await wrapper.find("button").trigger("click");
    await wrapper.find("button").trigger("click");
    await wrapper.find("button").trigger("click");

    expect(wrapper.find(".count").text()).toEqual("5+");
  });
});
