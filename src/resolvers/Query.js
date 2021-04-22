function feed(parent, args, context, info) {
    return context.prisma.link.findMany()
  }

async function post(parent, args, context, info) {
    const { userId } = context;

    return await context.prisma.link.create({
        data: {
        url: args.url,
        description: args.description,
        postedBy: { connect: { id: userId } },
        }
    })
}

function links(parent, args, context) {
    return context.prisma.user.findUnique({ where: { id: parent.id } }).links()
}  
  
module.exports = {
    feed,
    post,
    links,
}