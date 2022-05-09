<template>
  <Layout>
    <main id="main">
      <!-- ======= Breadcrumbs ======= -->
      <section class="breadcrumbs">
        <div class="container">
          <ol>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li>{{ $page.props.blogs.data[0].industry_slug }}</li>
          </ol>
        </div>
      </section>
      <!-- End Breadcrumbs -->

      <!-- ======= Blog Section ======= -->
      <section id="blog" class="blog">
        <div class="container" data-aos="fade-up" data-aos-delay="100">
          <div class="row">
            <div class="col-lg-8 entries">
              <article
                class="entry"
                v-for="(blog, key) in $page.props.blogs.data"
                :key="key"
              >
                <div class="">
                  <img
                    :src="`${$page.props.asset}/assets/img/blogs/${blog.image}`"
                    :alt="blog.slug"
                    class="img-fluid shadow-lg"
                  />
                  <hr />
                </div>

                <h1 class="entry-title py-2">
                  <Link :href="`/blog/read/${blog.slug}`">{{
                    blog.title
                  }}</Link>
                </h1>

                <div class="entry-meta">
                  <ul>
                    <li class="d-flex align-items-center">
                      <!-- <i class="bi bi-person"></i> -->
                      <!-- <a href="blog-single.html">John Doe</a> -->
                    </li>
                    <li class="d-flex align-items-center">
                      <i class="bi bi-clock"></i>
                      <a href="blog-single.html"
                        ><time datetime="2020-01-01">{{
                          formatDate(blog.created_at)
                        }}</time></a
                      >
                    </li>
                    <li class="d-flex align-items-center">
                      <!-- <i class="bi bi-chat-dots"></i> -->
                      <!-- <a href="blog-single.html">12 Comments</a> -->
                    </li>
                  </ul>
                </div>

                <div class="entry-content">
                  <p v-html="blog.content.substring(0, 500) + ' ...'"></p>
                  <div class="read-more">
                    <Link :href="`/blog/read/${blog.read}`">Read More</Link>
                  </div>
                </div>
              </article>
              <!-- End blog entry -->
              <div class="blog-pagination">
                <ul class="justify-content-center">
                  <li
                    :class="page.active ? 'active' : ''"
                    v-for="(page, key) in $page.props.blogs.links"
                    :key="key"
                  >
                    <Link
                      :href="page.url"
                      v-if="
                        (key != 0) & (key != $page.props.blogs.links.length - 1)
                      "
                      >{{ page.label }}</Link
                    >
                  </li>
                </ul>
              </div>
            </div>
            <!-- End blog entries list -->

            <div class="col-lg-4">
              <div class="sidebar">
                <h3 class="sidebar-title">Search</h3>
                <div class="sidebar-item search-form">
                  <form action="">
                    <input type="text" />
                    <button type="submit"><i class="bi bi-search"></i></button>
                  </form>
                </div>
                <!-- End sidebar search formn-->
                <h3 class="sidebar-title">Categories</h3>
                <div class="sidebar-item categories">
                  <ul>
                    <li
                      v-for="(industry, key) in $page.props.industries"
                      :key="key"
                    >
                      <Link :href="`/blog/category/${industry.slug}`"
                        >{{ industry.name }} <span>(25)</span></Link
                      >
                    </li>
                  </ul>
                </div>
                <!-- End sidebar categories-->
                <h3 class="sidebar-title">Recent Posts</h3>
                <div class="sidebar-item recent-posts">
                  <div
                    class="post-item clearfix"
                    v-for="(post, key) in $page.props.blogs.data"
                    :key="key"
                  >
                    <img
                      :src="`${$page.props.asset}/assets/img/blogs/${post.image}`"
                      :alt="post.slug"
                    />
                    <h4>
                      <Link :href="`/blog/read/${post.slug}`">{{
                        post.title.substring(0, 50)
                      }}</Link>
                    </h4>
                    <time datetime="2020-01-01">{{
                      formatDate(post.created_at)
                    }}</time>
                  </div>
                </div>
                <!-- End sidebar recent posts-->
                <!-- Featured Insights-->
                <h3 class="sidebar-title">Featured Insights</h3>
                <hr />
                <div class="sidebar-item recent-posts">
                  <div
                    class="post-item clearfix"
                    v-for="(insight, key) in $page.props.featured_insights"
                    :key="key"
                  >
                    <img
                      :src="`${$page.props.asset}/assets/img/insights/${insight.image}`"
                      :alt="insight.title"
                    />
                    <h4>
                      <Link :href="`/blog/read/${insight.image}`">{{
                        insight.title.substring(0, 50)
                      }}</Link>
                    </h4>
                    <time datetime="2020-01-01">{{
                      formatDate(insight.created_at)
                    }}</time>
                  </div>
                </div>
                <!-- End Featured insights-->
                <h3 class="sidebar-title">Tags</h3>
                <div class="sidebar-item tags">
                  <ul>
                    <li
                      v-for="(industry, key) in $page.props.industries"
                      :key="key"
                    >
                      <Link :href="`/blog/category/${industry.slug}`">{{
                        industry.name
                      }}</Link>
                    </li>
                  </ul>
                </div>
                <!-- End sidebar tags-->
              </div>
              <!-- End sidebar -->
            </div>
            <!-- End blog sidebar -->
          </div>
        </div>
      </section>
      <!-- End Blog Section -->
    </main>
  </Layout>
</template>

<script setup>
import { Link } from "@inertiajs/inertia-vue3";
import Layout from "./../../Layouts/Layout.vue";

const formatDate = (date) => {
  let d = new Date(date),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [year, month, day].join("-");
};
</script>

<style>
</style>
