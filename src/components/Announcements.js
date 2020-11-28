import React, { useState, useEffect } from "react";
import { MathComponent } from "mathjax-react";
import content from "../content/2.md";
import { ReactMarkdown } from "react-markdown";
function Announcements() {
  const [blog, setBlog] = useState("");
  useEffect(() => {
    fetch(content)
      .then((response) => response.text())
      .then((text) => {
        setBlog(text);
        console.log(blog);
      });
  });
  return (
    <div>
      <MathComponent
        tex={String.raw`
$$
  A = -\int mc\sqrt{g_{\mu\nu}\frac{dx^\mu}{d\tau}\frac{dx^\nu}{d\tau}} d\tau
$$

If you're facing this Lagrangian for the first time, it might seem daunting. So, let's see how to work with such Lagrangian by an example. We know the spherically symmetric static case results in Schwarzschild metric, which is given by -

$$
  g_{\mu\nu}\,dx^\mu dx^\nu = \left(1-{\frac {r_{\mathrm {s} }}{r}}\right)c^2\,dt^2-\left(1-{\frac {r_{\mathrm {s} }}{r}}\right)^{-1}\,dr^2-r^2\left(d\theta ^2+\sin ^2\theta \,d\varphi ^2\right)
$$

where \\(r\_{\mathrm {s} } = \frac{2GM}{c^2}\\) is the Schwarzschild radius. Now, let's see if we can reproduce the Newtonian mechanics from above in the limiting case. First, using coordinate time instead of proper time in action and substituting Schwarzschild metric, we get -

$$
  A = -\int dt\, mc\sqrt{\left(1-\frac{r_{\mathrm{s}}}{r}\right)c^2 - \left(1-{\frac{r_{\mathrm{s}}}{r}}\right)^{-1}\,\dot{r}^2 - r^2\left(\dot{\theta}^2+\sin^2\theta\,\dot{\varphi}^2\right)}
$$

And we know -

$$
  v^2 = \dot{r}^2 + r^2\left(\dot{\theta}^2+\sin^2\theta\,\dot{\varphi}^2\right)
$$

So, the Lagrangian will be,

$$
  
$$

Note that, we haven't used any approximations yet. Now, let's apply the approximation -

$$
  c^2 \gg v^2 + \frac{2GM}{r} \gg \frac{r_{\mathrm{s}}\dot{r}^2}{r - r_{\mathrm{s}}}
$$

We can obtain,

$$
  
$$`}
      />
    </div>
  );
}

export default Announcements;
