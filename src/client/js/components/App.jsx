import React from "react";
import Blog from "./Blog.jsx";
import SearchBlog from "./SearchBlog.jsx";
import Portal from "./Portal.jsx";
import AddBlogModal from './modals/AddBlogModal.jsx';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			blogs:[
				{author: "Author Oneasd", title: "Title One", message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia assumenda sed est quod hic, iste similique, unde eaque, veniam mollitia tempora? Sit voluptates similique eaque veritatis nihil architecto quibusdam inventore."},
				{author: "Author Two", title: "Title Two", message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia assumenda sed est quod hic, iste similique, unde eaque, veniam mollitia tempora? Sit voluptates similique eaque veritatis nihil architecto quibusdam inventore."},
				{author: "Author Three", title: "Title Three", message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia assumenda sed est quod hic, iste similique, unde eaque, veniam mollitia tempora? Sit voluptates similique eaque veritatis nihil architecto quibusdam inventore."},
				{author: "Author Four", title: "Title Four", message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia assumenda sed est quod hic, iste similique, unde eaque, veniam mollitia tempora? Sit voluptates similique eaque veritatis nihil architecto quibusdam inventore."},
				{author: "Author Five", title: "Title Five", message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia assumenda sed est quod hic, iste similique, unde eaque, veniam mollitia tempora? Sit voluptates similique eaque veritatis nihil architecto quibusdam inventore."},
				{author: "Author Six", title: "Title Six", message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia assumenda sed est quod hic, iste similique, unde eaque, veniam mollitia tempora? Sit voluptates similique eaque veritatis nihil architecto quibusdam inventore."},
				{author: "Author Seven", title: "Title Seven", message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia assumenda sed est quod hic, iste similique, unde eaque, veniam mollitia tempora? Sit voluptates similique eaque veritatis nihil architecto quibusdam inventore."}
			],
			searchBlog: {
				value: '',
				option: 'title'
			},
			showAddBlogPortal: false
		}

	}


	closeAddBlogModal() {
		this.setState({ showAddBlogPortal: false })
	}

	openAddBlogModal() {
		this.setState({ showAddBlogPortal: true })
	}

	onSearchChange(value) {
		this.setState({searchBlog: value})
	}

	onDeleteBlog(blog) {
		this.setState((prevState) => {
			return {blogs: prevState.blogs.filter((i) => i !== blog)}
		})
	}

	onAddBlog(blog) {
		this.setState((prevState) => {
			let newBlogs = prevState.blogs;
			newBlogs.unshift(blog);
			return {blogs: newBlogs};
		})
	}

	render() {
		return (
			<div className="container">
				<button className="addBlogBtn btn" onClick={() => this.openAddBlogModal()} >Add blog</button>
				<SearchBlog onSearchChange={(v) => this.onSearchChange(v)} />
				<ul className="blogList">
					{
						this.state.blogs
							.filter((blog) => blog[this.state.searchBlog.option].includes(this.state.searchBlog.value))
							.map((blog, index) => <Blog key={index} blog={blog} onDelete={(b) => this.onDeleteBlog(b)} />)
					}
				</ul>
				{ this.state.showAddBlogPortal &&
					<Portal>
						<AddBlogModal 
							onAddBlog={(b) => this.onAddBlog(b)} 
							closeAddBlogModal={() => this.closeAddBlogModal()} 
						/>
					</Portal>
				}

			</div>
			);
	}
}

export default App;