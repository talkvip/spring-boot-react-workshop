package no.itera.playground.repository;

import no.itera.playground.AwesomeBlogApplication;
import no.itera.playground.model.Post;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.WebIntegrationTest;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import java.util.List;

import static org.junit.Assert.*;

/**
 * Created by matwej on 7/13/16.
 */

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(classes = AwesomeBlogApplication.class)
@WebIntegrationTest
public class PostRepositoryTest {

    @Autowired
    PostRepository postRepository;

    @Test
    public void savePostToDB() {
        Post post = Post.builder()
                .title("Hello world")
                .content("First test post")
                .build();

        postRepository.saveAndFlush(post);

        List<Post> posts = postRepository.findAll();

        assertEquals(1, posts.size());
    }

}