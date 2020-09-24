<template>
<!-- <div class="container container-fluid"> -->
    <div class="row mt-5">

          <div class="col-md-12">
            <div class="card">
              <div class="card-header">
                <h3 class="card-title">User List</h3>
                        
                <div class="card-tools">
                    <button class="btn btn-success" data-toggle="modal" data-target="#addNew">
                        <i class="fas fa-user-plus fa-fw"></i>
                        Add User
                    </button>
                </div>
              </div>
              <!-- /.card-header -->
              <div class="card-body table-responsive p-0">
                <table class="table table-hover table-head-fixed">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Type</th>
                      <th>Modify</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Cupang Serit</td>
                      <td>cup4ngserit@gmail.com</td>
                      <td><span class="tag tag-success">Approved</span></td>
                      <td>
                          <a href="http://">
                            <i class="far fas fa-pencil-alt nav-icon &nbsp;"></i>
                          </a>
                          /
                          <a href="http://">
                            <i class="fa fas fa-trash red"></i>
                          </a>
                      </td>
                    </tr>
                    
                  </tbody>
                </table>
              </div>
              <!-- /.card-body -->
            </div>
            <!-- /.card -->
          </div>
    

            <!-- Modal -->
            <div class="modal fade" id="addNew" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Add New</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <input type="text" class="input" placeholder="username">
                    <input type="text" class="input" placeholder="email">
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Submit</button>
                </div>
                </div>
            </div>
            </div>
          <!-- end modal -->
    </div>
</template>
<script>
export default {
    mounted(){
        console.log('Component Mounted')
    }
}
</script>